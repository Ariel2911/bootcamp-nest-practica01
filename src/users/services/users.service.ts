import { BadRequestException, Injectable } from '@nestjs/common';
import { Observable, firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { IUser } from 'src/interfaces/user.interface';
import { users } from 'data/data';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}

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
    const userLenngth = users.length;

    users.push({ id: users[userLenngth - 1].id + 1, ...user });

    return users;
  }

  getPokemonByName(name: string): Observable<AxiosResponse<any, any>> {
    return this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  async getPokemonCompare(firstPokemon: string, secondPokemon: string) {
    interface IPokemon {
      name: string;
      hp: string;
      attack: string;
      defense: string;
    }

    const createPokemon = async (pokemon: string) => {
      try {
        const { data } = await firstValueFrom(
          this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`),
        );

        return {
          name: pokemon,
          hp: data?.stats[0].base_stat,
          attack: data?.stats[1].base_stat,
          defense: data?.stats[2].base_stat,
        };
      } catch (error) {
        throw new BadRequestException('Invalid data');
      }
    };

    const comparePokemon = (pokemon1: IPokemon, pokemon2: IPokemon) => {
      return {
        higherHp: pokemon1.hp > pokemon2.hp ? firstPokemon : secondPokemon,
        higherAttack:
          pokemon1.attack > pokemon2.attack ? firstPokemon : secondPokemon,
        higherDefense:
          pokemon1.defense > pokemon2.defense ? firstPokemon : secondPokemon,
      };
    };

    const pokemon1 = await createPokemon(firstPokemon);
    const pokemon2 = await createPokemon(secondPokemon);

    const higherStat = comparePokemon(pokemon1, pokemon2);

    return { pokemon1, pokemon2, higherStat };
  }
}
