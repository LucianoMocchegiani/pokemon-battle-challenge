import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Battle } from '../entities/battle.entity';
import { Pokemon } from '../entities/pokemon.entity';
import BattleGenerator from './battleGenerator';

@Injectable()
export class BattleService {
    constructor(
        @InjectRepository(Battle)
        private readonly battleRepository: Repository<Battle>,
        @InjectRepository(Pokemon)
        private readonly pokemonRepository: Repository<Pokemon>,
    ) {}

    async createBattle(id1:number, id2:number): Promise<Battle> {
        const pokemonA = await this.pokemonRepository.findOneBy({ id:id1 });
        const pokemonB = await this.pokemonRepository.findOneBy({ id:id2 });
        const newBattle = new BattleGenerator(pokemonA!, pokemonB!)
        newBattle.start()
        const battleResult = {result: newBattle.result, message: newBattle.message}
        return this.battleRepository.save(battleResult)
    }

    async findAll(): Promise<Battle[]> {
        return this.battleRepository.find();
    }
}



