async function fetchPokemon(pokemon){
    try{
        const  response = await fetch(`https://pokeapi.co/v2/pokemon/${pokemon.toLowerCase()}`)
        if(!response.ok) throw new Error('POKÉMON NOT FOUND')
            const data = await response.json()
        displayPokemon(data)

    }catch(error){
        console.error(error)
        document.getElementById('available-pokemon').innerHTML ="<p>Pokémon not found</p>"
    }
}

function displayPokemon(data){
    const container = document.getElementById('available-pokemon')
    container.innerHTML =`<div class="pokemon-card>
    <h2>${data.name.toUpperCase()} (#${data.id})
    </h2>
    <img src="${data.sprites.front_default}" alt="${data.name}">
    <p>Type:${data.types.map(t => t.type.name).join(",")}</p>
    </div>
    `
    
}

