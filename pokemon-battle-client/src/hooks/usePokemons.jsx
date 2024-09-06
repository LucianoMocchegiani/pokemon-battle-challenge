import { useEffect, useState } from "react"
import { getPokemons } from "../services/pokemon"
export function usePokemons(){
    const [pokemons, setPokemons] = useState({
        data:[],
        success:true,
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
        if(!pokemons.success){
            alert(pokemons.message)
        }
        hanndleGetPokemons()
    },[pokemons.success])

    return{
        pokemons:pokemons.data,
        success:pokemons.success,
        message:pokemons.message,
        loading,
        hanndleGetPokemons,
    }
}