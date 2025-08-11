// src/createTeams.js
document.addEventListener("DOMContentLoaded", () => {
  const saveBtn   = document.querySelector("#save-team");
  const nameInput = document.querySelector("#name-team");

  saveBtn.addEventListener("click", () => {
    const teamName = nameInput.value.trim();
    if (!teamName) {
      alert("Por favor, insira um nome para o seu time.");
      return;
    }

    // Seleciona todos os cards já adicionados ao team
    const cards = document.querySelectorAll(".team-cards .pokemon-card");
    if (cards.length === 0) {
      alert("Adicione pelo menos um Pokémon antes de salvar.");
      return;
    }

    // Monta array de pokémons com nome original, nome custom (input) e tipos
    const pokemons = Array.from(cards).map(card => {
      const originalName = card.dataset.name;
      const types        = card.dataset.types.split(",");
      const inputEl      = card.querySelector(".team-input");
      const customName   = inputEl && inputEl.value.trim()
                            ? inputEl.value.trim()
                            : originalName;

      return {
        originalName,
        customName,
        types
      };
    });

    // Carrega lista atual ou inicia vazia
    const stored = JSON.parse(localStorage.getItem("pokeTeams")) || [];

    // Cria novo time com ID sequencial
    const newId   = stored.length;
    const newTeam = {
      id:   newId,
      name: teamName,
      pokemons
    };

    // Persiste e redireciona com hash para destacar a linha na index.html
    stored.push(newTeam);
    localStorage.setItem("pokeTeams", JSON.stringify(stored));
    window.location.href = `index.html#team-${newId}`;
  });
});
