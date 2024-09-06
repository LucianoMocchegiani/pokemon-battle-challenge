import { useEffect, useState } from "react"
import { postBattle } from "../services/pokemon"

export function useBattle({pokemons}){
    const [battle, setBattle] = useState({
        data:null,
        success:true,
        message:null,
    })
    const [loading, setLoading] = useState(false)
    const [selectPokemon, setSelectPokemon] = useState(null)
    const [randomPokemon, setRandomPokemon] = useState(null)

    const handleSetRandomPokemon = ()=>{
        if(!pokemons){return}
        const randomIndex = Math.floor(Math.random() * pokemons.length)
        const newRandomPokemon = pokemons[randomIndex]
        setRandomPokemon(newRandomPokemon)
        return newRandomPokemon
    }

    const handleSelectPokemon = (pokemon)=>{
        setSelectPokemon(pokemon)
        setRandomPokemon(null)
    }

    const handleStartBattle = async ()=>{
        const newRandomPokemon = handleSetRandomPokemon()
        setLoading(true)
        setBattle({...battle, message:null, success:true})
        const res = await postBattle({id1:selectPokemon?.id, id2:newRandomPokemon?.id})
        setBattle(res)
        setLoading(false)
        // setSelectPokemon(null)
        // setRandomPokemon(null)
    } 

    return{
        result:battle.data?.result,
        success:battle.success,
        message:battle.message,
        loading,
        handleStartBattle,
        handleSelectPokemon,
        selectPokemon,
        randomPokemon
    }
}