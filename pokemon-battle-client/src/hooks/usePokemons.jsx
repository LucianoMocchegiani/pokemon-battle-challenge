import { useEffect, useState } from "react"
import { getPokemons } from "../services/pokemon"
export function usePokemons(){
    const [pokemons, setPokemons] = useState({
        data:[],
        error:null,
        message:null,
    })
    const [loading, setLoading] = useState(false)
    const hanndleGetPokemons = async ()=>{
        setLoading(true)
        const res = await getPokemons()
        setPokemons(res)
        setLoading(false)
        
    }
    useEffect(()=>{
        hanndleGetPokemons()
    },[])

    return{
        pokemons:pokemons.data,
        error:pokemons.error,
        message:pokemons.message,
        loading,
        hanndleGetPokemons,
    }
}