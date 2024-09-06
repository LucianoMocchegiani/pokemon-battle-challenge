import '../styles/CardPokemon.css'
import { usePokemonContext } from '../context/pokemonContext'

export default function CardPokemon({ pokemon }) {
    const {name, imageUrl} = pokemon
    const { battle } = usePokemonContext()
    
    return (
        <div className={battle.selectPokemon?.id == pokemon.id? 'card-container select-card':'card-container'} onClick={()=>battle.handleSelectPokemon(pokemon)} type='button'>
            <img src={imageUrl} alt={`pokemon-image-${name}`}/>
            <p>{name}</p>
        </div>  
    )
}

