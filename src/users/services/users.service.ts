import { Injectable } from '@nestjs/common';
import { IUser } from 'src/interfaces/user.interface';
import { users } from 'data/data';

@Injectable()
export class UsersService {
  getUsers(): IUser[] {
    return users;
  }
}
