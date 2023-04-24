import { Pool } from 'mysql2/promise';
import User from '../interfaces/usersInterface';

export default class Connection {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async login(username: string): Promise<User> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.users WHERE username = ?',
      [username],
    );

    const [rows] = result;
    const [user] = rows as User[] || [];
    return user;
  }
}