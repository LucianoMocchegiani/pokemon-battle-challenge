const { VITE_API_URL } = import.meta.env

export const getPokemons = async () => {
    try{
        const res = await fetch(`${VITE_API_URL}/pokemons`) 
        if(!res.ok) {
            throw new Error(`Error ${res.status}`);
        }
        const parseJson = await res.json()
        return { success: true, data: parseJson, message: 'Pokemons obtained' }

    }catch(error){
        return { success: false, data: null, message: error.message }
    }
}

export const postBattle = async ({ id1, id2 }) => {
    try{
        if (!id1 || !id2) {
            throw new Error(`Select one pokemon!`)
        }
        const res = await fetch(`${VITE_API_URL}/battles`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ id1, id2 }), 
        })
        if(!res.ok) {
            throw new Error(`Error ${res.status}`);
        }
        const parseJson = await res.json()
        return { success: true, data: parseJson, message: parseJson.message }

    }catch(error){
        return { success: false, data: null, message: error.message }
    }
}

export const getResults = async () => {
    try{
        const res = await fetch(`${VITE_API_URL}/battles`)
        if(!res.ok) {
            throw new Error(`Error ${res.status}`);
        }
        const parseJson = await res.json()
        return { success: true, data: parseJson, message: 'Battles obtained' }

    }catch(error){
        return { success: false, data: null, message: error.message }
    }
}