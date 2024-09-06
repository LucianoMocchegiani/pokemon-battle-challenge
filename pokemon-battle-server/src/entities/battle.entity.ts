import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Turn } from '../battle/battleGenerator';

@Entity()
export class Battle {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('json')
  result!: Turn[];

  @Column()
  message!: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;
}

