import './App.css'
import PokemonList from './components/PokemonList'
import CardBattle from './components/CardBattle'
import BattleResult from './components/BattleResult'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { usePokemonContext } from './context/pokemonContext'
import CircularProgress from '@mui/material/CircularProgress';

const ButtonBatlle = styled(Button)({
  textTransform: 'none' ,
  fontSize:'20px',
  paddingInline:'30px',
  width:'180px'
})


function App() {
  const { battle } = usePokemonContext()
  return (
    <>
      <main className='container'>
        <h1>Battle of pokemon</h1>
        <PokemonList/>
        <BattleResult/>
        <div className='battle-container'>
          <CardBattle pokemon={battle.selectPokemon} />
          <ButtonBatlle variant="contained" color="success" onClick={!battle.loading?battle.handleStartBattle:null} >
            {!battle.loading?'Start battle':<CircularProgress color="white" />}
          </ButtonBatlle>
          <CardBattle pokemon={battle.randomPokemon} />
        </div>
      </main>
    </>
  )
}

export default App
