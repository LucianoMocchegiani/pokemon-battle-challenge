import { type } from "os"

export type Pokemon = {
    id: number
    name: string
    attack: number
    defense: number
    hp: number
    speed: number
    type: string
    imageUrl: string
    damage?: number
}

export type Turn = {
    id: number
    name: string
    damageRecived: number
    hpRemaning: number
}

export default class BattleGenerator {
    pokemonA: Pokemon
    pokemonB: Pokemon
    result: Array<Turn>
    message: string 
    constructor(pokemonA: Pokemon, pokemonB: Pokemon) {
        this.pokemonA = { ...pokemonA }
        this.pokemonB = { ...pokemonB }
        this.result = []
        this.message = ''
    }

    #calculateDamage(attack: number, defense: number) {
        let value
        if (attack > defense) {
            value = attack - defense
        } else {
            value = 1
        }
        return value
    }

    #orderAttack() {
        let order
        if (this.pokemonA.speed > this.pokemonB.speed) {
            order = { first: this.pokemonA, second: this.pokemonB }
        } else if (this.pokemonA.speed < this.pokemonB.speed) {
            order = { first: this.pokemonB, second: this.pokemonA }
        } else {
            if (this.pokemonA.attack > this.pokemonB.attack) {
                order = { first: this.pokemonA, second: this.pokemonB }
            } else if (this.pokemonA.attack < this.pokemonB.attack) {
                order = { first: this.pokemonB, second: this.pokemonA }
            } else {
                order = Math.random() < 0.5 ? { first: this.pokemonA, second: this.pokemonB } : { first: this.pokemonB, second: this.pokemonA };
            }
        }
        return order
    }
    #calculateBattle(first: Pokemon, second: Pokemon) {
        let firstHp = first.hp
        let secondHp = second.hp

        while (firstHp > 0 && secondHp > 0) {
            secondHp = secondHp - first.damage!
            this.result.push({ name: second.name, id: second.id, damageRecived: first.damage!, hpRemaning: secondHp, })
            if (secondHp < 1) {
                this.message = `${first.name} wins!`
                break
            }
            firstHp = firstHp - second.damage!
            this.result.push({ name: first.name, id: first.id, damageRecived: second.damage!, hpRemaning: firstHp })
            if (firstHp < 1) {
                this.message = `${second.name} wins!`
            }
        }

    }
    start() {
        const damagePokemonA = this.#calculateDamage(this.pokemonA.attack, this.pokemonB.defense)
        const damagePokemonB = this.#calculateDamage(this.pokemonB.attack, this.pokemonA.defense)
        this.pokemonA = { ...this.pokemonA, damage: damagePokemonA }
        this.pokemonB = { ...this.pokemonB, damage: damagePokemonB }
        const { first, second } = this.#orderAttack()
        this.#calculateBattle(first, second)
    }
}
