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

  let nav = document.getElementById("nav");  // barra de navegação
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

const myTeamsBtn = document.querySelector(".btn-menu");  // botões de navegação entre as duas principais paginas do site 
  const createTeamBtn = document.querySelector(".btn-menu2");
  styleMenuButton(myTeamsBtn);
  styleMenuButton(createTeamBtn);

  createTeamBtn.style.fontWeight = "bold";
  createTeamBtn.style.textDecoration = "underline";

  let searchBar = document.getElementById("search-bar");  // antes barra de pesquisa, agora faz parte do layout de salvamento do time
  searchBar.style.marginTop = "4.5rem";
  searchBar.style.paddingBottom = "1.4rem";
  searchBar.style.borderBottom = "1px  solid #A9A9A9";

  const intro = document.createElement("h4");  // texto de introdução
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

const saveArea = document.querySelector(".save-area");  // area para salvar o time
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
  let hint = document.querySelector(".r");  // choose your pokemon 
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

// paginação da lista de pokemons adicionáveis 
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

  const p = document.querySelector(".pokemon-list h2");


  function createTeamNavigationButtons() {
    if (!document.getElementById("previous")) {
      const buttonContainer = document.createElement("div"); // container for the buttons
      Object.assign(buttonContainer.style, {
        display: "flex",
        justifyContent: "flex-start",
        gap: "10px",
        marginBottom: "10px",
        flexDirection: "row",
        position: "relative",
        marginLeft: "40px",
      });
      const previousButton = document.createElement("button");  // botao de voltar
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
      const nextButton = document.createElement("button"); // botao de proximo
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

      buttonContainer.appendChild(previousButton);   // organiza os botoes conforme o planejamento do layout
      previousButton.addEventListener("click", () => {
        const currentPage = parseInt(localStorage.getItem("currentPage")) || 1;
        if (currentPage > 1) {
          localStorage.setItem("currentPage", currentPage - 1);
          window.location.reload();
        }
      }); 
      buttonContainer.appendChild(nextButton);
      document.querySelector(".save-area").after(buttonContainer);
    }
  }
   

  createTeamNavigationButtons();
  
  
})