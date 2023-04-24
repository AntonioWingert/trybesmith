import { Request, Response } from 'express';
import UsersService from '../services/usersService';

export default class UsersController {
  usersService: UsersService;

  constructor(usersService = new UsersService()) {
    this.usersService = usersService;
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const { username, vocation, level, password } = req.body;

    const token = await this.usersService.create({ username, vocation, level, password });

    res.status(201).json({ token });
  }
}