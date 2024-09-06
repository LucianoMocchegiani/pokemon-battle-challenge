import { DataSource } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Battle } from './entities/battle.entity'; 

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [Pokemon, Battle], 
  migrations: ['src/migrations/*.ts'],
  synchronize: false, 

});
