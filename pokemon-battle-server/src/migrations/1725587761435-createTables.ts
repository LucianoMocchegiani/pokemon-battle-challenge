import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1725587761435 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS pokemon (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name VARCHAR(100),
                type VARCHAR(50),
                attack INT,
                speed INT,
                defense INT,
                hp INT,
                imageUrl VARCHAR(255),
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        `);
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS battle (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                result JSON NOT NULL,
                message TEXT NOT NULL,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS pokemon`);
        await queryRunner.query(`DROP TABLE IF EXISTS battle`);
    }
}
