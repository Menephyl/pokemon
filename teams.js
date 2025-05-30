document.addEventListener("DOMContentLoaded", async () => {
 
  const availableContainer = document.getElementById("available-pokemon");

  if (!availableContainer) {
    console.warn("Erro: Elemento #available-pokemon não encontrado!");
    return;
  }


  const pokemonList = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
   
  ];

  for (let name of pokemonList) {
    const pokemon = await fetchPokemonData(name);
    if (pokemon) displayPokemon(pokemon, availableContainer);
  }
  // API - para todo o documento 

  async function fetchPokemonData(pokemonName) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      if (!response.ok) throw new Error("Erro ao buscar Pokémon.");
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

   
function navigationPokemonOptions(){
  const previousButton = document.querySelector("#previous");
  const nextButton = document.querySelector("#next");
   if(previousButton || nextButton){
    previousButton.addEventListener("click",()=>{
      alert("Previous Pokémon");
    })
    nextButton.addEventListener('click',() => {
      alert("Next Pokémon");
    })
   }else{
    console.warn("Erro: Botões de navegação não encontrados!");
   }
}
navigationPokemonOptions();
// cards pokemons na lista lateral para adicionar
  function displayPokemon(pokemon, container) {

    const card = document.createElement("figure");

    if (container.id === "available-pokemon") {
      card.classList.add("pokemon-card"); // 🔹 Mantém apenas o estilo básico
    } else {
      card.classList.add("pokemon-card", `card--${pokemon.types[0].type.name}`); // 🔹 Aplica cor baseada no tipo só no time
    }



    const imageContainer = document.createElement("div");
    imageContainer.classList.add("card__image-container");

    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;
    img.alt = pokemon.name;
    imageContainer.appendChild(img);

    const caption = document.createElement("figcaption");
    caption.classList.add("card__caption");

    const name = document.createElement("h2");
    name.classList.add("card__name");
    name.textContent = pokemon.name;

    const type = document.createElement("h4");
    type.classList.add("card__type");
    type.textContent = pokemon.types.map((t) => t.type.name).join(", ");

    // Botão para adicionar Pokémon ao time -> aqui a função para colocar o pokemon no conteiner do time

    const addButton = document.createElement("button");
    addButton.classList.add("btn", "btn-sm", "btn-outline-secondary");
    addButton.textContent = "Add Pokémon";
    addButton.addEventListener("click", () => {
      alert(`OK`);
    });

    //  Botão para ver detalhes do pokemon
    const detailsButton = document.createElement("button");
    detailsButton.classList.add("btn-sm", "btn-danger");
    detailsButton.textContent = "Detalhes";
    Object.assign(detailsButton.style, {
      marginLeft: "10px",
      fontWeight: "light",
      paddingTop: "15px",
    });

    detailsButton.addEventListener("click", () => {
      alert(`
          ${pokemon.sprites.other["official-artwork"].front_default}'alt='${
        pokemon.name
      } \n ' // imagem do pokemon, objetvo : inserir a imagem do pokemon
        Details for ${pokemon.name}:\n
        Type: ${pokemon.types.map((t) => t.type.name).join(", ")}\n
        Height: ${pokemon.height / 10} cm \n
        Weight: ${pokemon.weight / 10} kg\n
        Abilities: ${pokemon.abilities.map((a) => a.ability.name).join(", ")}`);

      alert(`   // objetivo depois é criar uma div acima ou mover esse div para acima do item ( uma ideia boa pode ser o z-index para colocar a div acima do item)
        <div class ='pokemon-details -card'>
              // <h1>
              //     ${data.name.toUpperCase()}(#${data.id})
              // </h1>
          <img src=${
            data.sprites.other["official-artwork"].front_default
          }'alt='${data.name}'>
          <p><strong>Altura:</strong>${data.height / 10} m</p>
          <p><strong>Peso:</strong>${data.weight / 10} kg</p>
          <p><strong>Tipo:</strong>${data.types
            .map((t) => t.type.name)
            .join(",")}</p>
          <p><strong>Habilidades:</strong>${data.abilities
            .map((a) => a.ability.name)
            .join(", ")}</p>
          </div>`);
    });

    caption.appendChild(addButton);
    caption.appendChild(name);
    caption.appendChild(type);

    card.appendChild(imageContainer);
    card.appendChild(caption);

    caption.appendChild(detailsButton);

    container.appendChild(card);



  }

// essa estrutura logica  de paginação esta provavelmente certa, mas preciso saber se o que eu fiz está certo, ou se tem algo errado, ou se tem algo a mais que eu posso fazer para melhorar a paginação

 

  // time do usuario - teamBuilder
  // deleteButton.addEventListener("click", () => {
  //     card.remove();
  // });
  // caption.appendChild(addButton);
  // caption.appendChild(deleteButton);

  // const newName = prompt("Digite um novo nome para " + pokemon.name);
  // if (newName) name.textContent = newNamejm;
});


/* 
"charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash",
    "nidoran-f",
    "nidorina",
    "nidoqueen",
    "nidoran-m",
    "nidorino",
    "nidoking",
    "clefairy",
    "clefable",
    "vulpix",
    "ninetales",
    "jigglypuff",
    "wigglytuff",
    "zubat",
    "golbat",
    "oddish",
    "gloom",
    "vileplume",
    "paras",
    "parasect",
    "venonat",
    "venomoth",
    "diglett",
    "dugtrio",
    "meowth",
    "persian",
    "psyduck",
    "golduck",
    "mankey",
    "primeape",
    "growlithe",
    "arcanine",
    "poliwag",
    "poliwhirl",
    "poliwrath",
    "abra",
    "kadabra",
    "alakazam",
    "machop",
    "machoke",
    "machamp",
    "bellsprout",
    "weepinbell",
    "victreebel",
    "tentacool",
    "tentacruel",
    "geodude",
    "graveler",
    "golem",
    "ponyta",
    "rapidash",
    "slowpoke",
    "slowbro",
    "magnemite",
    "magneton",
    "farfetchd",
    "doduo",
    "dodrio",
    "seel",
    "dewgong",
    "grimer",
    "muk",
    "shellder",
    "cloyster",
    "gastly",
    "haunter",
    "gengar",
    "onix",
    "drowzee",
    "hypno",
    "krabby",
    "kingler",
    "voltorb",
    "electrode",
    "exeggcute",
    "exeggutor",
    "cubone",
    "marowak",
*/