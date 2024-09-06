import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pokemon {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    attack!: number;

    @Column()
    defense!: number;

    @Column()
    hp!: number;

    @Column()
    speed!: number;

    @Column()
    type!: string;

    @Column()  
    imageUrl!: string;

    @Column({  type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })  
    createdAt!: Date;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })  // Snake Case para la columna
    updatedAt!: Date;
}
