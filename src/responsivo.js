document.addEventListener("DOMContentLoaded", () => {
  // Header e navegação
  document.querySelector("header")?.classList.add("header-base");
  document.getElementById("menu")?.classList.add("menu-base");
  document.getElementById("nav")?.classList.add("nav-base");
  document.querySelector(".links")?.classList.add("links-base");

  document.querySelectorAll(".btn-menu, .btn-menu2").forEach(btn => {
    btn.classList.add("menu-btn");
  });
  document.querySelector(".btn-menu2")?.classList.add("active-btn");

  // Barra de busca e input
  document.getElementById("search-bar")?.classList.add("search-bar");
  document.getElementById("name-team")?.classList.add("team-name-input");

  // Texto introdutório
  const searchBar = document.getElementById("search-bar");
  if (searchBar && !document.querySelector(".intro-text")) {
    const intro = document.createElement("h4");
    intro.innerText = "What will be the name of your pokemon team?";
    intro.classList.add("intro-text");
    searchBar.appendChild(intro);
  }

  // Área de salvar
  document.querySelector(".save-area")?.classList.add("save-area-flex");
  document.querySelector(".r")?.classList.add("save-hint");
  document.getElementById("save-team")?.classList.add("save-btn");

  // Grid de pokémons
  document.querySelectorAll(".grid").forEach(grid => {
    grid.classList.add("pokemon-grid");
  });

  // Botões de paginação
  if (!document.getElementById("previous")) {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("pagination-container");

    const previousButton = document.createElement("button");
    previousButton.id = "previous";
    previousButton.textContent = "<< Previous";
    previousButton.classList.add("pagination-btn", "btn-previous");

    const nextButton = document.createElement("button");
    nextButton.id = "next";
    nextButton.textContent = "Next >>";
    nextButton.classList.add("pagination-btn", "btn-next");

    buttonContainer.append(previousButton, nextButton);
    document.querySelector(".save-area")?.after(buttonContainer);

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
});
