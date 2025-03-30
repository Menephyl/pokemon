const detailsContainer = document.getElementById('pokemon-details')

async function fechtPokemonDetails(id){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if(!response.ok)  throw new Error("Pokémon não encontrado")
            const data = await response.json()
        displayPokemonDetails(data)
    }catch(error){
        detailsContainer.innerHTML ="<p>Pokémon não encontrado</p>"
    }
}



function displayPokemonDetails(data){
    detailsContainer.innerHTML =`
    <div class ='pokemon-details-card'>
        <h1>
            ${data.name.toUpperCase()}(#${data.id})
        </h1>
    <img src=${data.sprites.other['official-artwork'].front_default}'alt='${data.name}'>
    <p><strong>Altura:</strong>${data.height/10} m</p>
    <p><strong>Peso:</strong>${data.weight/10} kg</p>
    <p><strong>Tipo:</strong>${data.types.map(t=>t.type.name).join(",")}</p>
    <p><strong>Habilidades:</strong>${data.abilities.map(a=>a.ability.name).join(', ')}</p>
    </div>`

}

const urlParams = new URLSearchParams(window.location.search)
const pokemonId = urlParams.get('id')

if(pokemonId){
    fetchPokemonDetails(pokemonId)
}else{
    detailsContainer.innerHMTL ="<p>Nenhum pokemon selecionado.</p>"
}