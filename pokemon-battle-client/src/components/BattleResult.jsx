import '../styles/BattleResult.css'
import { usePokemonContext } from '../context/pokemonContext'

export default function BattleResult() {
    const {battle} = usePokemonContext()
    return (
        <div className={battle.success?'battle-result-container':'battle-result-container battle-result-error'}>
            <p className='battle-result-text'>{battle.message?battle.message:'Select pokemon and press battle start!'}</p>
        </div>
    )
}