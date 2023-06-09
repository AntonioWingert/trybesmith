import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/usersInterface';

export default class UsersModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(user: User): Promise<User> {
    const { username, vocation, level, password } = user;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );

    return { id: result.insertId, username, vocation, level, password };
  }
}