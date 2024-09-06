import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Battle } from '../entities/battle.entity';
import { BattleService } from './battle.service';
import { BattleController } from './battle.controller';
import { PokemonModule } from '../pokemon/pokemon.module'; 

@Module({
    imports: [
        TypeOrmModule.forFeature([Battle]),
        PokemonModule, 
    ],
    
    providers: [BattleService],
    controllers: [BattleController],
    
})
export class BattleModule {}

