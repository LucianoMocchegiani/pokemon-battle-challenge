import './PokemonList.css'
import CardPokemon from './CardPokemon'
import { usePokemonContext } from '../context/pokemonContext'

export default function PokemonList() {
    const { pokemons } = usePokemonContext()
    return (
        <>
            {pokemons.pokemons.length ?<h2>Select your pokemon</h2>:<h2>No hay pokemones en la lista</h2>}
            {pokemons.pokemons.length ?
            <ul className='list-container'>
                {pokemons.pokemons.map(pokemon =>
                    <li key={crypto.randomUUID()}>
                        <CardPokemon pokemon={pokemon} />
                    </li>
                )}
            </ul>:null}
        </>
    )
}


