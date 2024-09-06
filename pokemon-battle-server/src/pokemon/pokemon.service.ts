import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from '../entities/pokemon.entity';

@Injectable()
export class PokemonService {
    constructor(
        @InjectRepository(Pokemon)
        private readonly pokemonRepository: Repository<Pokemon>,
    ) {}

    async findAll(): Promise<Pokemon[]> {   
        return this.pokemonRepository.find();
    }
}
