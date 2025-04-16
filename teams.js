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
  searchBar.style.paddingBottom='1.4rem';
   searchBar.style.borderBottom= '1px  solid #A9A9A9'
   
  



  const intro  = document.createElement('h4')
  searchBar.appendChild(intro)
  intro.innerText='What will be the name of your pokemon team?'
  Object.assign(intro.style,{
    display:'flex',
    position:'absolute',
    top:'25rem',
    left:'38%',
    marginBottom:'0.5rem',
    fontFamily:'Times New Roman,sans-serif',
    fontSize:'24px',
    fontWeight:'400',
    

  })
  
  let nameTeamInput = document.querySelector('#name-team')
  Object.assign(nameTeamInput.style,{
    display:'flex',
    position:'relative',
    marginTop:'1.5rem',
    left:'43%',
    textAlign:'justify',
    height:'30px',
    borderRadius:'1px',
    textDecoration:'none',
   
  
  })
  
  // nameTeamInput.style.marginBottom='5rem'
  // let input = document.getElementById("search");
  // Object.assign(input.style, {
  //   marginTop:'12rem',
  //   padding: "1rem",
  //   width: "25rem",
  //   borderRadius: "0.5rem",
  //    display:"none"
  // });

  let saveArea = document.querySelector('.save-area')
  Object.assign(saveArea.style,{
    display:'flex',
    flexDireciton:'row',
    padding:'0.5rem',
    fontFamily:'Times new roman,sans serif',
    backgroundColor:'light'


  })

  let text = document.querySelector('.text')
  text.style.textAlign='left'
  text.style.marginLeft='15%'
  text.style.fontSize='20px'
  // text.style.marginBottom='20px'

  let saveButton = document.querySelector("#save-team");
  Object.assign(saveButton.style,{
    display:'flex',
   marginLeft:'17rem',
   backgroundColor:'#2a75bb',
   color:'white',   
   fontWeight:'light'
   
  })
 
 
 

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
    height:'auto',
    display:'flex',
  
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