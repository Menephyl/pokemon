document.addEventListener("DOMContentLoaded", function () {
 document.body.style.fontFamily = "Arial,sans-serif";
 document.body.style.backgroundColor = "#f4f4f4";
 document.body.style.textAlign = "center";
 
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

  const myTeamsBtn = document.querySelector(".btn-menu");
  const createTeamBtn = document.querySelector(".btn-menu2");
  styleMenuButton(myTeamsBtn);
  styleMenuButton(createTeamBtn);

  createTeamBtn.style.fontWeight = "bold";
  createTeamBtn.style.textDecoration = "underline";

  let searchBar = document.getElementById("search-bar");
  searchBar.style.margin = "2rem";
  
  let input = document.getElementById("search");
  Object.assign(input.style, {
    padding: "1rem",
    width: "25rem",
    borderRadius: "0.5rem",
  });

  let button = document.querySelector(".search-btn");
  Object.assign(button.style, {
    padding: "1rem 2rem",
    backgroundColor: "#2a75bb",
    color: "white",
    border: "none",
    cursor: "pointer",
  });

  let grids = document.querySelectorAll(".grid");
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
    maxWidth: "50rem",
  });

  let saveButton = document.querySelector("#save-team");
  saveButton.style.marginTop = "2rem";

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

  const chooseYourPokemon = document.querySelector(".pokemon-list h2");
  const saveTeamSection = document.querySelector(".team-builder");

  chooseYourPokemon.style.display='none'
  saveTeamSection.style.display='none'


  function toggleCreateTeam() {
    const isHidden = searchBar.style.display === "none";
    searchBar.style.display = isHidden ? "block" : "none";
    saveTeamSection.style.display = isHidden ? "block" : "none";
    chooseYourPokemon.style.display = isHidden ? "block" : "none";

    if (isHidden) {
      createTeamBtn.style.fontWeight = "bold";
      createTeamBtn.style.textDecoration = "underline";
      myTeamsBtn.style.fontWeight = "normal";
      myTeamsBtn.style.textDecoration = "none";
    } else {
      createTeamBtn.style.fontWeight = "normal";
      createTeamBtn.style.textDecoration = "none";
      myTeamsBtn.style.fontWeight = "bold";
      myTeamsBtn.style.textDecoration = "underline";
    }
  }

  createTeamBtn.addEventListener("click", toggleCreateTeam);
//   createTeamMainBtn.addEventListener("click", toggleCreateTeam);
})