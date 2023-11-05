import { Injectable } from '@nestjs/common';
import { IUser } from 'src/interfaces/user.interface';
import { users } from 'data/data';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class UsersService {
  private counter: number = users.length;

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

  createUser(user: CreateUserDto) {
    this.counter++;
    users.push({ id: this.counter, ...user });

    return users;
  }
}
