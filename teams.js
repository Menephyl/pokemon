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


  const pokemonList = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard",
    "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree",
    "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot",
    "rattata", "raticate", "spearow", "fearow", "ekans", "arbok",
    "pikachu", "raichu", "sandshrew", "sandslash", "nidoran-f", "nidorina",
    "nidoqueen", "nidoran-m", "nidorino", "nidoking", "clefairy", "clefable",
    "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat",
    "oddish", "gloom", "vileplume", "paras", "parasect", "venonat",
    "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck",
    "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag",
    "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop",
    "machoke", "machamp", "bellsprout", "weepinbell", "victreebel",
    "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta",
    "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd",
    "doduo", "dodrio", "seel", "dewgong", "grimer", "muk",
    "shellder", "cloyster", "gastly", "haunter", "gengar", "onix",
    "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode",
    "exeggcute", "exeggutor", "cubone", "marowak"];

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
  });

  let saveArea = document.querySelector(".save-area"); // area para salvar o time criado
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

  let text = document.querySelector(".text");
  Object.assign(text.style, {
    textAlign: "left",
    marginLeft: "15%",
    fontSize: "20px",
  });
  // text.style.marginBottom='20px'

  let saveButton = document.querySelector("#save-team"); // botao para salvar o time 
  Object.assign(saveButton.style, {
    display: "flex",
    marginLeft: "auto",
    backgroundColor: "#2a75bb",
    color: "white",
    fontWeight: "light",
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

  let teamBuilder = document.querySelector(".team-builder");
  Object.assign(teamBuilder.style, {
    backgroundColor: "white",
    padding: "4rem",
    margin: "4rem auto",
    borderRadius: "2rem",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.2)",
    maxWidth: "50%",
    height: "auto",
    display: "flex",
  });

  const chooseYourPokemon = document.querySelector(".pokemon-list h2");
  const saveTeamSection = document.querySelector(".team-builder");

  chooseYourPokemon.style.display = "none";
  saveTeamSection.style.display = "none";

  function createTeamNavigationButtons(){
    if(!document.getElementById('previous')){
      const buttonContainer = document.createElement('div')
      Object.assign(buttonContainer.style,{
        display:'flex',
        justifyContent:'center',
        gap:'10px',
        marginBottom:'20px',
        display:'flex',
        flexDirection:'row',
        position:'relative',
        marginRight:'98rem'
      })
      const previousButton = document.createElement('button')
      previousButton.textContent='<< Previous'
      previousButton.id='previous'
      Object.assign(previousButton.style,{
        padding:'10px 20px',
        backgroundColor:'red',
        border:'none',
        cursor: "pointer",
        fontSize: "13px", 
        color:'white',
        maxWidth:'100px',
        height:'50px',
        padding:'10px',
        marginTop:'10px'
      })
      const nextButton = document.createElement("button");
      nextButton.textContent = "Next >>";
      nextButton.id = "Next";
      Object.assign(nextButton.style, {
          padding: "10px 20px",
          backgroundColor: "#2a75bb",
          color: "White",
          border: "none",
          cursor: "pointer",
          fontSize: "13px",
          width:'100px',
          height:'50px',
          marginTop:'10px'
      });

      buttonContainer.appendChild(previousButton);
      buttonContainer.appendChild(nextButton);
      // availableContainer.insertBefore(previousButton, availableContainer.firstChild);
      // availableContainer.appendChild(nextButton);
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

  function displayPokemon(pokemon, container) {
    const card = document.createElement("figure");
    card.classList.add("pokemon-card", `card--${pokemon.types[0].type.name}`);
  
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
    
  
    const type = document.createElement("h3");
    type.classList.add("card__type");
    type.textContent = pokemon.types.map((t) => t.type.name).join(", ");
  
    // Botão para editar nome
    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-sm", "btn-outline-secondary");
    editButton.textContent = "Add";
    editButton.addEventListener("click", () => {
        // const newName = prompt("Digite um novo nome para " + pokemon.name);
        // if (newName) name.textContent = newName;
    });
  
    //  Botão para remover Pokémon do time
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn-sm", "btn-danger");
    deleteButton.textContent = "Detalhes";
    Object.assign(deleteButton.style, {
        marginLeft: "10px",
        fontWeight: "light",
        paddingTop: "15px",
    });
    // deleteButton.addEventListener("click", () => {
    //     card.remove();
    // });
  
    caption.appendChild(editButton);
    caption.appendChild(name);
    caption.appendChild(type);
    caption.appendChild(deleteButton);
    card.appendChild(imageContainer);
    card.appendChild(caption);
  
    container.appendChild(card);
  }
  
  

  function displayPokemonInList(pokemon, container) {
    const card = document.createElement("div");
    card.classList.add("pokemon-selection-card"); 

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

    //  Botão "Add Pokemon"
    const addButton = document.createElement("button");
    addButton.classList.add("btn-sm", "btn-primary");
    addButton.textContent = "Add Pokemon";
    addButton.addEventListener("click", () => {
        displayPokemon(pokemon, document.getElementById("available-pokemon"));
    });

    //  Botão "Details"
    const detailsButton = document.createElement("button");
    detailsButton.classList.add("btn-sm", "btn-info");
    detailsButton.textContent = "Details";
    detailsButton.addEventListener("click", () => {
        alert(`Details for ${pokemon.name}:\nType: ${pokemon.types.map(t => t.type.name).join(", ")}\nHeight: ${pokemon.height}\nWeight: ${pokemon.weight}`);
    });

    caption.appendChild(name);
    caption.appendChild(addButton);
    caption.appendChild(detailsButton);
    card.appendChild(imageContainer);
    card.appendChild(caption);

    container.appendChild(card);
}
 async function updatePokemonList(startIndex,limit){
  const paginationContainer = document.getElementById('pokemon-pagination')
  paginationContainer.innerHTML=""
  const pokemonList = [
    
  ];
  for (let i = startIndex; i < Math.min(startIndex + limit, pokemonList.length); i++) {
    const pokemon = await fetchPokemonData(pokemonList[i]);
    if (pokemon) displayPokemonInList(pokemon, paginationContainer);
 }
}
let currentIndex = 0 
const limit = 5 
document.getElementById('previous').addEventListener('click',()=>{
  if (currentIndex > 0) {
    currentIndex -= limit;
    updatePokemonList(currentIndex, limit);
}
})
document.getElementById("next").addEventListener("click", () => {
  if (currentIndex + limit < 100) {
      currentIndex += limit;
      updatePokemonList(currentIndex, limit);
  }

});





}); 