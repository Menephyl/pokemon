
document.addEventListener("DOMContentLoaded", function () {
 document.body.style.fontFamily = "Russo One,sans-serif";
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
    flexDirection:"row",
    justifyContent: "right",
    textAlign:'auto',
    alignContent:"auto",
    gap: "1rem",
    marginTop: "1rem",
    marginLeft:'auto',
    fontFamily:'RussoOne',


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

  const teamStatutsTitle = document.querySelector('.team-status')

  Object.assign(teamStatutsTitle.style,{
    paddingTop:'40px',
    fontWeight:'200',
    
    
  })



  const myTeamsBtn = document.querySelector(".btn-menu");
  const createTeamBtn = document.querySelector(".btn-menu2");
  styleMenuButton(myTeamsBtn);
  styleMenuButton(createTeamBtn);

  myTeamsBtn.style.fontWeight = "bold";
  myTeamsBtn.style.textDecoration = "underline";
 

 

  const createTeamMainBtn = document.createElement("button"); 
  
  // o botao create team é da tela inicial entao tem que ficar 

  createTeamMainBtn.textContent = "Create Team";
  Object.assign(createTeamMainBtn.style, {
    padding: "1rem 2rem",
    backgroundColor: "#2a75bb",
    color: "white",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontSize: "1.2rem",
    marginTop: "1.5rem",
  });
  createTeamMainBtn.addEventListener('click', function(event){
    window.location.href =' createTeams.html'
  })
  document.body.insertBefore(createTeamMainBtn, document.querySelector("main"));

document.addEventListener("DOMContentLoaded", () => {
  const container    = document.getElementById("teams-container");
  const noTeamsMsg   = document.getElementById("no-teams-msg");
  const tbody        = document.getElementById("team-table-body");
  const savedTeams   = JSON.parse(localStorage.getItem("pokeTeams")) || [];

  if (savedTeams.length === 0) {
    container.classList.add("hidden");
    noTeamsMsg.classList.remove("hidden");
    return;
  }

  

  // (mantenha aqui a lógica de delete/edit já implementada)
});
 
});




