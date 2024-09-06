import { useContext, createContext } from "react";
import { usePokemons } from "../hooks/usePokemons";
import { useResults } from "../hooks/useResults";
import { useBattle } from "../hooks/useBattle";

export const pokemonContext = createContext();

export function usePokemonContext() {
    const context = useContext(pokemonContext)
    return context
}

export function PokemonProvider({ children }) {
    const results = useResults()
    const pokemons = usePokemons()
    const battle = useBattle({pokemons:pokemons.pokemons})

    return (
        <pokemonContext.Provider value={{ results, pokemons, battle }}>
            {children}
        </pokemonContext.Provider>
    )
}


