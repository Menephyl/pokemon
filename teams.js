document.addEventListener("DOMContentLoaded", async () => {
  document.body.style.fontFamily = "Russo One,sans-serif";
  document.body.style.backgroundColor = "#f4f4f4";
  document.body.style.textAlign = "center";

  const availableContainer = document.getElementById("available-pokemon");

  if (!availableContainer) {
    console.warn("Erro: Elemento #available-pokemon não encontrado!");
    return;
  }
  createTeamNavigationButtons();

  const pokemonList = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
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
    
  ];

  for (let name of pokemonList) {
    const pokemon = await fetchPokemonData(name);
    if (pokemon) displayPokemon(pokemon, availableContainer);
  }

  // header
  let header = document.querySelector("header");
  Object.assign(header.style, {
    backgroundColor: "#ffcb05",
    padding: "5rem",
    fontSize: "2.5rem",
    color: "#2a75bb",
  });

  let menu = document.getElementById("menu");
  menu.style.backgroundColor = "#fff";

  let links = document.querySelector(".links");
  Object.assign(links.style, {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  });

  function styleMenuButton(button) {
    Object.assign(button.style, {
      color: "black",
      textDecoration: "none",
      padding: "0.5rem 1rem",
      borderRadius: "0.5rem",
      transition: "background-color 0.3s",
    });

    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = "#ffcb05";
    });
    button.addEventListener("mouseleave", () => {
      button.style.backgroundColor = "transparent";

// VARIÁVEIS GLOBAIS PARA PAGINAÇÃO
//////////////////////////////////////////////
const pokemonPerPage = 3;       // Número de Pokémon por página
let currentPage = 0;            // Página ativa (inicia em 0)
let paginatedPokemonList = [];  // Array para armazenar as páginas (cada página é um array de objetos Pokémon)

//////////////////////////////////////////////
// FUNÇÃO: Buscar dados completos do Pokémon
//////////////////////////////////////////////
async function fetchPokemonData(pokemonName) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) throw new Error("Erro ao buscar Pokémon.");
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar os dados do Pokémon:", error);
  }
}

//////////////////////////////////////////////
// FUNÇÃO: Paginar a lista de Pokémon
//////////////////////////////////////////////
async function paginatePokemonList(pokemonList) {
  paginatedPokemonList = []; // Limpa a lista paginada anterior
  for (let i = 0; i < pokemonList.length; i += pokemonPerPage) {
    const page = await Promise.all(
      pokemonList.slice(i, i + pokemonPerPage).map(name => fetchPokemonData(name))
    );
    paginatedPokemonList.push(page);
  }
  console.log("Lista Paginada Criada:", paginatedPokemonList);
}
//////////////////////////////////////////////
// FUNÇÃO: Exibir a página atual
//////////////////////////////////////////////
function displayCurrentPage() {
  const availableContainer = document.getElementById("available-pokemon");
  availableContainer.innerHTML = ""; // 🔥 Limpa os Pokémon atuais antes de exibir os novos

  if (paginatedPokemonList[currentPage]) {
    paginatedPokemonList[currentPage].forEach(pokemon => {
      if (pokemon) displayPokemon(pokemon, availableContainer);
    });
  }

  console.log(`Exibindo página ${currentPage + 1} de ${paginatedPokemonList.length}`);
}

// NAVEGAÇÃO

function setupPaginationButtons() {
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");

  if (!previousButton || !nextButton) {
    console.warn("Erro: Botões de navegação não encontrados!");
    return;
  }

  previousButton.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--; 
      displayCurrentPage();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < paginatedPokemonList.length - 1) {
      currentPage++; 
      displayCurrentPage(); 
    }
  });
}








   });
  }

  let nav = document.getElementById("nav");
  Object.assign(nav.style, {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
  });

  Object.assign(links.style, {
    display: "flex",
    gap: "1rem",
    marginLeft: "auto",
  });

  const myTeamsBtn = document.querySelector(".btn-menu");
  const createTeamBtn = document.querySelector(".btn-menu2");
  styleMenuButton(myTeamsBtn);
  styleMenuButton(createTeamBtn);

  createTeamBtn.style.fontWeight = "bold";
  createTeamBtn.style.textDecoration = "underline";

  let searchBar = document.getElementById("search-bar");
  searchBar.style.marginTop = "4.5rem";
  searchBar.style.paddingBottom = "1.4rem";
  searchBar.style.borderBottom = "1px  solid #A9A9A9";

  const intro = document.createElement("h4");
  searchBar.appendChild(intro);
  intro.innerText = "What will be the name of your pokemon team?";
  Object.assign(intro.style, {
    display: "flex",
    position: "absolute",
    top: "25rem",
    left: "38%",
    marginBottom: "0.5rem",
    fontFamily: "Times New Roman,sans-serif",
    fontSize: "24px",
    fontWeight: "400",
  });

  let nameTeamInput = document.querySelector("#name-team"); // caixa para colcar o nome do time

  Object.assign(nameTeamInput.style, {
    display: "flex",
    position: "relative",
    marginTop: "1.5rem",
    left: "43%",
    textAlign: "justify",
    height: "30px",
    borderRadius: "1px",
    textDecoration: "none",
    gap: "1rem",
    padding: "0.5rem",
  });

const saveArea = document.querySelector(".save-area");
if (saveArea) {
    saveArea.style.display = "flex";
    saveArea.style.flexDirection = "row";
    saveArea.style.padding = "0.5rem";
} else {
    console.warn("Elemento .save-area não encontrado!");
}
  Object.assign(saveArea.style, {
    display: "flex",
    flexDirection: "row",
    padding: "0.5rem",
    fontFamily: "Times new roman,sans serif",
    backgroundColor: "light",
    justifyContent: "flex-end", // Isso alinha o botão à direita
    padding: "1.5rem",
    marginRight: "29rem",
    
    gap: "20px",
  });
  let hint = document.querySelector(".r");
  Object.assign(hint.style, {
    position: "absolute",
    marginRight: "20rem",
    padding: "20px",
    fontSize: "20px",
  });



  let saveButton = document.querySelector("#save-team"); // botao para salvar o time
  
  Object.assign(saveButton.style, {
    display: "flex",
    marginLeft: "auto",
    backgroundColor: "#2a75bb",
    color: "white",
    fontWeight: "lightm",
  });


 
 // paginação da lista
  let grids = document.querySelectorAll(".grid"); // para  a lista de pokemons da api
  grids.forEach((grid) => {
    Object.assign(grid.style, {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2rem",
      padding: "3rem",
    });
  }); 

  // const p = document.querySelector(".pokemon-list h2");


  function createTeamNavigationButtons() {
    if (!document.getElementById("previous")) {
      const buttonContainer = document.createElement("div");
      Object.assign(buttonContainer.style, {
        display: "flex",
        justifyContent: "flex-start",
        gap: "10px",
        marginBottom: "10px",
        flexDirection: "row",
        position: "relative",
        marginLeft: "40px",
      });
      const previousButton = document.createElement("button");
      previousButton.textContent = "<< Previous";
      previousButton.id = "previous";
      Object.assign(previousButton.style, {
        backgroundColor: "red",
        border: "none",
        cursor: "pointer",
        fontSize: "13px",
        color: "white",
        maxWidth: "100px",
        height: "50px",
        padding: "10px 20px",
        marginTop: "10px",
      });
      const nextButton = document.createElement("button");
      nextButton.textContent = "Next >>";
      nextButton.id = "next";
      Object.assign(nextButton.style, {
        padding: "10px 20px",
        backgroundColor: "#2a75bb",
        color: "White",
        border: "none",
        cursor: "pointer",
        fontSize: "13px",
        width: "100px",
        height: "50px",
        marginTop: "10px",
      });

      buttonContainer.appendChild(previousButton);
      buttonContainer.appendChild(nextButton);

      document.querySelector(".save-area").after(buttonContainer);
    }
  }
  
  // API

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
              <h1>
                  ${data.name.toUpperCase()}(#${data.id})
              </h1>
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