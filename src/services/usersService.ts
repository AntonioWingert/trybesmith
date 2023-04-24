import connection from '../models/connection';
import UsersModel from '../models/usersModel';
import User from '../interfaces/usersInterface';
import generateToken from '../utils/generateToken';

export default class UsersService {
  model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  async create(user: User): Promise<string> {
    const result = await this.model.create(user);

    const token = generateToken({ id: result.id, username: result.username });

    return token;
  }
}