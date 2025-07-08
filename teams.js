// teams.js

document.addEventListener("DOMContentLoaded", async () => {
  const availableContainer = document.getElementById("available-pokemon");
  if (!availableContainer) {
    console.warn("Erro: Elemento #available-pokemon não encontrado!");
    return;
  }
  const teamContainer = document.querySelector(".team-container");
  if (teamContainer) {
    teamContainer.classList.add('hidden');
  }

  let limit = 4;
  let offset = 0;
  function createTeamNavigationButtons() {
    if (document.getElementById("previous")) return;

    const buttonContainer = document.createElement("div");
    Object.assign(buttonContainer.style, {
      position: "relative",
      display: "flex",
      top: "40px",
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
      border: "none",
      cursor: "pointer",
      color: "white",
      fontSize: "13px",
      padding: "10px 20px",
      height: "50px",
    });

    buttonContainer.append(previousButton, nextButton);
    document.querySelector(".save-area")?.after(buttonContainer);
  }
  // 2) Função de navegação, agora chamando loadPage()
  function navigationPokemonOptions() {
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");

    if (previousButton && nextButton) {
      previousButton.addEventListener("click", async () => {
        offset = Math.max(0, offset - limit);  // vai para a página anterior
        await loadPage();                       // <<< INSERIR AQUI
      });
      nextButton.addEventListener("click", async () => {
        offset += limit;                        // avança a página
        await loadPage();                       // <<< INSERIR AQUI
      });
    }
  }

  // 3) INSIRA DEPOIS de fetchPokemonData() ⬇️
  // Função que busca só nomes/URLs
  async function fetchPokemonList(limit = 4, offset = 0) {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    if (!res.ok) throw new Error("Erro ao buscar lista de Pokémons");
    const { results } = await res.json();
    return results;
  }

  // Função que limpa a tela e redesenha os cards “Disponíveis”
  async function loadPage() {
    availableContainer.innerHTML = "";         // limpa antigos

    try {
      // busca lista de { name, url }
      const list = await fetchPokemonList(limit, offset);

      // para cada nome, busca detalhes e exibe
      for (const { name } of list) {
        const pokemon = await fetchPokemonData(name);
        if (pokemon) displayPokemon(pokemon, availableContainer);
      }
    } catch {
      availableContainer.textContent = "Erro ao carregar Pokémons.";
    }
  }
  // FIM INSERÇÃO PAGINAÇÃO DINÂMICA 


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

    // IMAGEM
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("card__image-container");
    const img = document.createElement("img");
   img.src = pokemon.sprites.other["official-artwork"].front_default;
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
      if (!teamContainer) return;

      // 1) Revele a seção de time, caso oculto 

      if (teamContainer.classList.contains("hidden")) {
        teamContainer.classList.remove("hidden");
        teamContainer.style.display = "flex";
      }

      // 2) Checa duplicatas pelo nome
      const exists = [...teamContainer.querySelectorAll(".card__name")]
        .some(el => el.textContent.toLowerCase() === pokemon.name.toLowerCase());
      if (exists) {
        alert(`${pokemon.name} já está no seu time!`);
        return;
      }
      // monta o teamCard iniciado a partir do clone
      const teamCard = card.cloneNode(true);

      // Remove conteúdo antigo do caption
      const cap2 = teamCard.querySelector("figcaption");
      cap2.innerHTML = "";


      // 1) atualiza classes de tipo (caso ainda não tenha)
      teamCard.classList.add(`card--${pokemon.types[0].type.name}`);

      // 2) remove todo o conteúdo de figcaption
      const cap = teamCard.querySelector("figcaption");
      cap.innerHTML = "";
      // REMOVE a imagem original clonada
      const clonedImgDiv = teamCard.querySelector(".card__image-container");
      if (clonedImgDiv) clonedImgDiv.remove();



      const imgDiv = document.createElement("div");
      imgDiv.classList.add("card__image-container");
      const img = document.createElement("img");
      img.src = pokemon.sprites.other["official-artwork"].front_default;
      img.alt = pokemon.name;
      imgDiv.appendChild(img);


      // 4) title (oculto, mas usado p/ duplicata)
      const title = document.createElement("h2");
      title.classList.add("card__name");
      title.textContent = pokemon.name;
      title.style.display = "none";

      // 5) input para renomear
      const nameInput = document.createElement("input");
      nameInput.classList.add("team-input");
      nameInput.type = "text";
      nameInput.placeholder = "put Name";

      const nameLabel = document.createElement("p");
      nameLabel.classList.add("team-card-name");
      nameLabel.textContent = pokemon.name;


      // 6) botão Remove
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = "Remove";
      deleteBtn.addEventListener("click", () => {
        teamCard.remove();
        if (!teamContainer.querySelector(".pokemon-card")) {
          teamContainer.classList.add("hidden");
        }
      });

      // cria o footer branco
      const footerDiv = document.createElement("div");

      
      footerDiv.classList.add("team-card-footer");
      footerDiv.append(nameInput,nameLabel, deleteBtn);

      
      // 7) monta o card
      cap.append(title, imgDiv, nameInput,footerDiv, deleteBtn, );
      teamCard.appendChild(cap);

      // 8) adiciona ao container do time
      const cardsWrapper = document.querySelector(".team-cards");
      cardsWrapper.appendChild(teamCard);
    });

    const detailsButton = document.createElement("button");
    detailsButton.classList.add("btn-sm", "btn-danger");
    detailsButton.textContent = "Detalhes";

    detailsButton.addEventListener("click", () => {
      alert(`
        ${pokemon.sprites.other["official-artwork"].front_default}
        Details for ${pokemon.name}:
        Type: ${pokemon.types.map(t => t.type.name).join(", ")}
        Height: ${pokemon.height / 10} cm
        Weight: ${pokemon.weight / 10} kg
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


  // CARREGA E EXIBE OS POKÉMON iniciais
  createTeamNavigationButtons();
  navigationPokemonOptions();
  await loadPage();
});