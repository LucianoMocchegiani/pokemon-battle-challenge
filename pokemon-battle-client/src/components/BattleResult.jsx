import './BattleResult.css'
import { usePokemonContext } from '../context/pokemonContext'

export default function BattleResult() {
    const {battle} = usePokemonContext()
    return (
        <div className='battle-result-container'>
            <p className='battle-result-text'>{battle.message?battle.message:'Select pokemon and press battle start!'}</p>
        </div>
    )
}