import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { IUser } from 'src/interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): IUser[] {
    return this.usersService.getUsers();
  }
}
