import './CardBattle.css'
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const BattleSlider = styled(Slider)({
    color: '#80ed71',
    height: 8,
    '& .MuiSlider-thumb': {
        display: 'none',
    },
    margin:0,
    padding:0,
});

export default function CardBattle({ pokemon }) {
    if(!pokemon){
        return (
            <div className='card-battle-container'>
                <QuestionMarkIcon sx={{ fontSize: 90 }}/>
            </div>
        )
    }
    const { name, imageUrl, hp, attack, defense, speed } = pokemon
    return (
        <div className='card-battle-container'>
            <div className='card-batlle-header'>
                <img src={imageUrl} alt={`pokemon-image-${name}`} />
                <p className='card-battle-name-text'>{name}</p>
            </div>
            <div className='card-battle-stats-container'>
                <p>HP</p>
                <BattleSlider 
                    value={hp}
                    max={6}
                    min={0}
                />
                <p>Attack</p>
                <BattleSlider 
                    value={attack}
                    max={6}
                    min={0}
                />
                <p>Defense</p>
                <BattleSlider 
                    value={defense}
                    max={6}
                    min={0}
                />
                <p>Speed</p>
                <BattleSlider 
                    value={speed}
                    max={6}
                    min={0}
                />
            </div>
        </div>
    )
}

