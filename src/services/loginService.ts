import connection from '../models/connection';
import LoginModel from '../models/loginModel';
import HttpException from '../utils/HttpException';
import generateToken from '../utils/generateToken';

export default class LoginService {
  model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  async login(username: string, password: string): Promise<string> {
    const result = await this.model.login(username);

    if (!result) throw new HttpException(401, 'Username or password invalid');

    if (password !== result.password) {
      throw new HttpException(401, 'Username or password invalid');
    }

    const token = generateToken({ id: result.id, username: result.username });

    return token;
  }
}