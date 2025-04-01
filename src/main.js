document.addEventListener('DOMContentLoaded',function(){
    document.body.style.fontFamily="Aria,sans-serif"
    document.body.style.backgroundColor ="#f4f4f4"
    document.body.style.textAlign="center"

    let header = document.querySelector('header')
    header.style.backgroundColor="#ffcb05"
    header.style.padding='20px'
    header.style.fontSize="24px"
    header.style.color="#2a75bb"

 let.searchBar = document.querySelector('.search-bar')
 searchBar.style.margin="20px"
})


















window.alert('BORA CODAR!')

// const pokemonContainer = document.getElementById('pokemon-container')
// const searchInput = document.getElementById ('search'); 

// async function fetchPokemon(pokemon){
//     try{ 

//       // requisiçao da api   
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemmon.toLowerCase()}`)
//         if(!response.ok) throw new Error ('Pokémon não encontrado')

//             const data = await response.json()
//             displayPokemon(data)
    
//     }catch(error){
//         pokemonContainer.innerHTML ='<p>Pokémon não encontrado. </p>'
//         console.error(error)
//     }
// }

// function displayPokemon(data){
//     pokemonContainer.innerHTML = `<div class="pokemon-card">
//     <h2>${data.name.toUpperCase()} (#${data.id})</h2>
//     <img src="${data.sprites.front_default}" alt="${data.name}">
//     <p> Tipo: ${data.types.map(t => t.type.name).join(", ")}</p>
//     </div>`
// }

// function searchPokemon(){
//     const pokemon =searchInput.value.trim()
//     if(pokemon) {fetchPokemon(pokemon)
// } else {
//     pokemonContainer.innerHTML="<p>Digite um nome ou número de Pokémon</p>"
// }

// }

// function goToDetails(id){
//     window.location.href =`pokemon.html?id=${id}`
// }
// window.searchPokemon = searchPokemon;
