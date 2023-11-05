import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { IUser } from 'src/interfaces/user.interface';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): IUser[] {
    return this.usersService.getUsers();
  }

  @Get('qty')
  getQuantity() {
    return this.usersService.getQuantity();
  }

  @Get(':id')
  getUser(@Param('id') id: string): IUser {
    return this.usersService.getUser(id);
  }

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    if (!userData?.name || !userData?.surname || !userData?.age) {
      throw new BadRequestException('Invalid data');
    }
    return this.usersService.createUser(userData);
  }
}
