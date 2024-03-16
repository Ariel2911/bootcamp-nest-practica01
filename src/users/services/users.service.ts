import { Injectable } from '@nestjs/common';
import { IUser } from 'src/interfaces/user.interface';
import { users } from 'data/data';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor() {}

  getUsers(): IUser[] {
    return users;
  }

  getUser(id: string): IUser {
    const user = users.find((user) => Number(id) === user.id);
    return user;
  }

  getQuantity(): number {
    console.log(users.length);
    return users.length;
  }

  createUser(user: CreateUserDto): IUser[] {
    const userLenngth = users.length;

    users.push({ id: users[userLenngth - 1].id + 1, ...user });

    return users;
  }
}
