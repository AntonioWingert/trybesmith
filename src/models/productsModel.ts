import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/productsInterface';

export default class ProductsModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(product: Product): Promise<Product> {
    const { name, amount } = product;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: result.insertId, name, amount };
  }

  async getAll(): Promise<Product[]> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.products',
    );
    const [products] = result;

    return products as Product[];
  }
}
