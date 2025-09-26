// layout.js
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("body-base");

  const header = document.querySelector("header");
  header?.classList.add("header-base");

  const menu = document.getElementById("menu");
  menu?.classList.add("menu-base");

  const nav = document.getElementById("nav");
  nav?.classList.add("nav-base");

  const links = document.querySelector(".links");
  links?.classList.add("links-base");

  document.querySelectorAll(".btn-menu, .btn-menu2").forEach(btn => {
    btn.classList.add("menu-btn");
  });
  document.querySelector(".btn-menu2")?.classList.add("active-btn");

  const searchBar = document.getElementById("search-bar");
  searchBar?.classList.add("search-bar");

  if (searchBar && !searchBar.querySelector(".intro-text")) {
    const intro = document.createElement("h4");
    intro.innerText = "What will be the name of your pokemon team?";
    intro.classList.add("intro-text");
    searchBar.appendChild(intro);
  }

  document.getElementById("name-team")?.classList.add("team-name-input");

  const saveArea = document.querySelector(".save-area");
  saveArea?.classList.add("save-area-flex");

  document.querySelector(".r")?.classList.add("save-hint");
  document.getElementById("save-team")?.classList.add("save-btn");

  document.querySelectorAll(".grid").forEach(grid => {
    grid.classList.add("pokemon-grid");
  });
});
