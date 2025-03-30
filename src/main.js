window.alert('BORA CODAR!')

const pokemonContainer = document.getElementById('pokemon-container')
const searchInput = document.getElementById ('search'); 

async function fetchPokemon(pokemon){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemmon.toLowerCase()}`)
        if(!response.ok) throw new Error ('Pokémon não encontrado')

            const data = await response.json()
            displayPokemon(data)

    }catch(error){
        pokemonContainer.innerHTML ='<p>Pokémon não encontrado. </p>'
    }
}

function displayPokemon(data){
    pokemonContainer.innerHTML = `<div class="pokemon-card" onclick="goToDetails(${data.id})">
    <h2>${data.name.toUpperCase()} (#${data.id})</h2>
    <img src="${data.sprites.front_default}" alt="${data.name}">
    <p> Tipo:${data.types.map(t=>t.type.name).join(", ")}</p>
    </div>`
}

function searchPokemon(){
    const pokemon =searchInput.value.trim()
    if(pokemon) fetchPokemon(pokemon)
}

function goToDetails(id){
    window.location.href =`pokemon.html?id=${id}`
}
