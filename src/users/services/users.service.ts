import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getSaludo() {
    return 'Saludo desde users';
  }
}
