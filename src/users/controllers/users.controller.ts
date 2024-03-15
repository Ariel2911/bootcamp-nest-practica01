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
import { firstValueFrom } from 'rxjs';

@Controller('api/users')
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

  @Get('pokemon/:name')
  async getPokemonByName(@Param('name') name: string) {
    const { data } = await firstValueFrom(
      this.usersService.getPokemonByName(name),
    );
    return data;
  }

  @Get('pokemon/compare/:firstPokemon/:secondPokemon')
  async getPokemonCompare(
    @Param('firstPokemon') firstPokemon: string,
    @Param('secondPokemon') secondPokemon: string,
  ) {
    return this.usersService.getPokemonCompare(firstPokemon, secondPokemon);
  }
}
