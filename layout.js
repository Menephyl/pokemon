// layout.js
document.addEventListener("DOMContentLoaded", async () => {
  document.body.style.fontFamily = "Russo One,sans-serif";
  document.body.style.backgroundColor = "#f4f4f4";
  document.body.style.textAlign = "center";

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
    justifyContent: "flex-start",
    padding: "1rem",
  });

  const linkGroup = nav.querySelector('.links');

  nav.style.display = 'flex';
  nav.style.alignItems = 'center';

  /* empurra o grupo de links pra direita */
  linkGroup.style.marginLeft = 'auto';
  linkGroup.style.display = 'flex';
  linkGroup.style.gap = '1rem';



  styleMenuButton(document.querySelector(".btn-menu"));
  styleMenuButton(document.querySelector(".btn-menu2"));

  // highlight the “Create Team” button
  const createTeamBtn = document.querySelector(".btn-menu2");
  createTeamBtn.style.fontWeight = "bold";
  createTeamBtn.style.textDecoration = "underline";

  // style search‐bar area
  let searchBar = document.getElementById("search-bar");
  Object.assign(searchBar.style, {
    marginTop: "4.5rem",
    paddingBottom: "1.4rem",
    borderBottom: "1px solid #A9A9A9",
  });

  // prompt text
  const intro = document.createElement("h4");
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
  searchBar.appendChild(intro);

  // team‐name input styling
  Object.assign(document.querySelector("#name-team").style, {
    display: "flex",
    position: "relative",
    marginTop: "1.5rem",
    left: "43%",
    textAlign: "justify",
    height: "30px",
    borderRadius: "1px",
    gap: "1rem",
    padding: "0.5rem",
  });

  // save‐area styling
  const saveArea = document.querySelector(".save-area");
  if (!saveArea) console.warn("Elemento .save-area não encontrado!");
  Object.assign(saveArea.style, {
    display: "flex",
    flexDirection: "row",
    padding: "1.5rem",
    justifyContent: "flex-end",
    marginRight: "29rem",
    gap: "20px",
    fontFamily: "Times new roman,sans serif",
  });

  // hint text styling
  Object.assign(document.querySelector(".r").style, {
    position: "absolute",
    marginRight: "20rem",
    padding: "20px",
    fontSize: "20px",
  });

  // Save‐team button styling
  Object.assign(document.querySelector("#save-team").style, {
    backgroundColor: "#2a75bb",
    color: "white",
  });

  // grid list styling
  document.querySelectorAll(".grid").forEach(grid => {
    Object.assign(grid.style, {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2rem",
      padding: "3rem",
    });
  });

  // pagination buttons (if not present)
  function createTeamNavigationButtons() {
    if (document.getElementById("previous")) return;

    const buttonContainer = document.createElement("div");
    Object.assign(buttonContainer.style, {
      display: "flex",
      justifyContent: "flex-start",
      gap: "10px",
      marginBottom: "10px",
      position: "relative",
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
      height: "50px",
      padding: "10px 20px",
      marginTop: "10px",
    });
    buttonContainer.appendChild(previousButton);

    const nextButton = document.createElement("button");
    nextButton.id = "next";
    nextButton.textContent = "Next >>";
    Object.assign(nextButton.style, {
      backgroundColor: "#2a75bb",
      border: "none",
      cursor: "pointer",
      color: "white",
      fontSize: "13px",
      height: "50px",
      padding: "10px 20px",
      marginTop: "10px",
    });
    buttonContainer.appendChild(nextButton);

    document.querySelector(".save-area")?.after(buttonContainer);

    // hook to reload page if you’re persisting currentPage in localStorage
    previousButton.addEventListener("click", () => {
      const currentPage = parseInt(localStorage.getItem("currentPage")) || 1;
      if (currentPage > 1) {
        localStorage.setItem("currentPage", currentPage - 1);
        window.location.reload();
      }
    });
    nextButton.addEventListener("click", () => {
      const currentPage = parseInt(localStorage.getItem("currentPage")) || 1;
      localStorage.setItem("currentPage", currentPage + 1);
      window.location.reload();
    });
  }

  createTeamNavigationButtons();

  // ——————— SAVE TEAM LOGIC ———————
  const saveBtn = document.querySelector("#save-team");
  saveBtn.addEventListener("click", () => {
    const nameInput = document.querySelector("#name-team");
    const teamName = nameInput.value.trim();
    if (!teamName) {
      alert("Por favor, insira um nome para o time.");
      return;
    }

    const cards = document.querySelectorAll(".team-cards .pokemon-card");
    if (cards.length === 0) {
      alert("Selecione ao menos um Pokémon para salvar o time.");
      return;
    }

    // build array of pokémons
    const pokemons = Array.from(cards).map(card => {
      const originalName = card.dataset.name;
      const types = card.dataset.types.split(",");
      const inputEl = card.querySelector(".team-input");
      // fallback to originalName if no custom value
      const customName =
        inputEl && inputEl.value.trim() ? inputEl.value.trim() : originalName;
      return { originalName, customName, types };
    });

    // load existing, assign new ID
    const stored = JSON.parse(localStorage.getItem("pokeTeams")) || [];
    const newId = stored.length;
    const newTeam = { id: newId, name: teamName, pokemons };

    stored.push(newTeam);
    localStorage.setItem("pokeTeams", JSON.stringify(stored));

    // redirect with hash so index.html highlights it
    window.location.href = `index.html#team-${newId}`;
  });
  // ——————— end SAVE TEAM LOGIC ———————
});
