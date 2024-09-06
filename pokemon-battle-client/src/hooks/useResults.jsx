import { useEffect, useState } from "react"
import { getResults } from "../services/pokemon"

export function useResults(){
    const [results, setResults] = useState({
        data:[],
        error:null,
        message:null,
    })
    const [loading, setLoading] = useState(false)
    const hanndleGetResults = async ()=>{
        setLoading(true)
        const res = await getResults()
        setResults(res)
        setLoading(false)
    }
    useEffect(()=>{
        hanndleGetResults()
    },[])

    return{
        results:results.data,
        error:results.error,
        message:results.message,
        loading,
        hanndleGetResults,
    }
}