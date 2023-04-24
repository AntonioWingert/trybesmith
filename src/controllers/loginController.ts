import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class LoginController {
  loginService: LoginService;

  constructor(loginService = new LoginService()) {
    this.loginService = loginService;
    this.login = this.login.bind(this);
  }

  async login(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    const token = await this.loginService.login(username, password);
    
    res.status(200).json({ token });
  }
}