import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from '../entities/pokemon.entity';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Pokemon])],
    providers: [PokemonService],
    controllers: [PokemonController],
    exports:[TypeOrmModule],
})
export class PokemonModule {}

