import { Pool } from 'mysql2/promise';

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
}
