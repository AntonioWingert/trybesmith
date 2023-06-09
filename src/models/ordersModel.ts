import { Pool, ResultSetHeader } from 'mysql2/promise';

import Order from '../interfaces/orderInterface';

export default class OrdersModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<Order[]> {
    const [rows] = await this.connection.execute(`
    SELECT
        orders.id,
        orders.user_id AS userId,
        JSON_ARRAYAGG(products.id) AS productsIds
      FROM
        Trybesmith.orders AS orders
          LEFT JOIN
        Trybesmith.products AS products
        ON orders.id = products.order_id
      GROUP BY orders.id
      ORDER BY orders.user_id;
    `);

    return rows as Order[];
  }

  async create(userId: number, productsIds: number[]): Promise<Order> {
    const [result] = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.orders (user_id) VALUES (?);
    `, [userId]);

    const { insertId } = result;

    const placeholder = productsIds.map(() => '?').join(', ');

    await this.connection.execute(`
      UPDATE Trybesmith.products
      SET order_id = ? 
      WHERE id IN (${placeholder});
    `, [insertId, ...productsIds]);

    return {
      userId,
      productsIds,
    };
  }
}
