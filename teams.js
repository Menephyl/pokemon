// teams.js

document.addEventListener("DOMContentLoaded", async () => {
  const availableContainer = document.getElementById("available-pokemon");
  if (!availableContainer) {
    console.warn("Erro: Elemento #available-pokemon não encontrado!");
    return;
  }
 const teamContainer = document.querySelector(".team-container");
  if (teamContainer) {
    teamContainer.style.display = "none";
  }
  // FUNÇÃO: cria os botões Previous/Next no DOM
  function createTeamNavigationButtons() {
    if (document.getElementById("previous")) return;

    const buttonContainer = document.createElement("div");
    Object.assign(buttonContainer.style, {
      position:"relative",
      display: "flex",
      top:"40px",
      justifyContent: "flex-start",
      gap: "10px",
      marginBottom: "30px",
      marginLeft: "40px",
    });

    const previousButton = document.createElement("button");
    previousButton.id = "previous";
    previousButton.textContent = "<< Previous";
    Object.assign(previousButton.style, {
      backgroundColor: "red",
      border: "none",
      cursor: "pointer",
      color: "white",
      fontSize: "13px",
      padding: "10px 20px",
      height: "50px",
    });

    const nextButton = document.createElement("button");
    nextButton.id = "next";
    nextButton.textContent = "Next >>";
    Object.assign(nextButton.style, {
      backgroundColor: "#2a75bb",
      border: "none"   ,
      cursor: "pointer",
      color: "white",
      fontSize: "13px",
      padding: "10px 20px",
      height: "50px",
    });

    buttonContainer.append(previousButton, nextButton);
    document.querySelector(".save-area")?.after(buttonContainer);
  }

  // FUNÇÃO: conecta eventos aos botões
  function navigationPokemonOptions() {
    const previousButton = document.getElementById("previous");
    const nextButton     = document.getElementById("next");

    if (previousButton && nextButton) {
      previousButton.addEventListener("click", () => {
        alert("Previous Pokémon");
      });
      nextButton.addEventListener("click", () => {
        alert("Next Pokémon");
      });
    } else {
      console.warn("Erro: Botões de navegação não encontrados!");
    }
  }

  // FUNÇÃO: busca dados de um Pokémon na PokeAPI
  async function fetchPokemonData(pokemonName) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!res.ok) throw new Error("Erro ao buscar Pokémon.");
      return await res.json();
    } catch (err) {
      console.error(err);
    }
  }

  // FUNÇÃO: exibe um card de Pokémon dentro de um container
  function displayPokemon(pokemon, container) {
    const card = document.createElement("figure");
    card.classList.add("pokemon-card");
    // if (container.id !== "available-pokemon") {
    //   card.classList.add(`card--${pokemon.types[0].type.name}`);
    // }

    // IMAGEM
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("card__image-container");
    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;
    img.alt = pokemon.name;
    imgDiv.append(img);
// LEGENDA
    const caption = document.createElement("figcaption");
    caption.classList.add("card__caption");
// NOME
    const title = document.createElement("h2");
    title.classList.add("card__name");
    title.textContent = pokemon.name;

    const type = document.createElement("h4");
    type.classList.add("card__type");
    type.textContent = pokemon.types.map(t => t.type.name).join(", ");
// BOTÕES
    const addButton = document.createElement("button");
    addButton.classList.add("btn", "btn-sm", "btn-outline-secondary");
    addButton.textContent = "Add Pokémon";
     addButton.addEventListener("click", () => {
      // 1) Revele a seção de time
      teamContainer.classList.remove("hidden");
      
      // 2) Clone o card
      const teamCard = card.cloneNode(true);
      
      // 3) Remova somente o botão “Add” do clone
      const clonedAdd = teamCard.querySelector(".btn-outline-secondary");
      if (clonedAdd) clonedAdd.remove();
      
      // 4) Insira o clone no seu time
      teamContainer.appendChild(teamCard);


    });

    const detailsButton = document.createElement("button");
    detailsButton.classList.add("btn-sm", "btn-danger");
    detailsButton.textContent = "Detalhes";
    // Object.assign(detailsButton.style, {
    //   marginLeft: "10px",
    //   fontWeight: "light",
    //   paddingTop: "15px",
    // });
    detailsButton.addEventListener("click", () => {
      alert(`
        ${pokemon.sprites.other["official-artwork"].front_default}
        Details for ${pokemon.name}:
        Type: ${pokemon.types.map(t => t.type.name).join(", ")}
        Height: ${pokemon.height/10} cm
        Weight: ${pokemon.weight/10} kg
        Abilities: ${pokemon.abilities.map(a => a.ability.name).join(", ")}
      `);
    });
    
    caption.append(addButton, title, type, detailsButton);
    card.append(imgDiv, caption);
    container.append(card);
  }

  // PRIMEIRO: crio botões e configuro eventos
  createTeamNavigationButtons();
  navigationPokemonOptions();

  // LISTA DE POKÉMON (sem duplicatas)
  const pokemonList = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
  ];

  // CARREGA E EXIBE OS POKÉMON iniciais
  for (let name of pokemonList) {
    const pokemon = await fetchPokemonData(name);
    if (pokemon) displayPokemon(pokemon, availableContainer);
  }
});