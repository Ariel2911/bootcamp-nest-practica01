import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { IUser } from 'src/interfaces/user.interface';
import { users } from 'data/data';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}

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

  getPokemonByName(name: string): Observable<AxiosResponse<any, any>> {
    return this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
