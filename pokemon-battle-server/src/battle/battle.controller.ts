import { Controller, Get, Param, Post, Body, UsePipes } from '@nestjs/common';
import { BattleService } from './battle.service';
import { Battle } from '../entities/battle.entity';
import { ValidateIdsPipe } from './battle.pipe';

@Controller('battles')
export class BattleController {
    constructor(private readonly battleService: BattleService) {}

    @Get()
    async findAll(): Promise<Battle[]> {
      return this.battleService.findAll();
    }

    @Post()
    @UsePipes(ValidateIdsPipe) 
    async createBattle(@Body() body: { id1: string; id2: string }) {
      const { id1, id2 } = body;
      return this.battleService.createBattle(id1, id2);
    }
}
