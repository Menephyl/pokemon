
document.addEventListener("DOMContentLoaded", () => {
  const saveBtn   = document.querySelector("#save-team");
  const nameInput = document.querySelector("#name-team");

  saveBtn.addEventListener("click", () => {
    const teamName = nameInput.value.trim();
    if (!teamName) {
      alert("Por favor, insira um nome para o seu time.");
      return;
    }

    const cards = document.querySelectorAll(".team-cards .pokemon-card");
    if (cards.length === 0) {
      alert("Adicione pelo menos um Pokémon antes de salvar.");
      return;
    }

    
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

   
    const stored = JSON.parse(localStorage.getItem("pokeTeams")) || [];

  
    const newId   = stored.length;
    const newTeam = {
      id:   newId,
      name: teamName,
      pokemons
    };


    stored.push(newTeam);
    localStorage.setItem("pokeTeams", JSON.stringify(stored));
    window.location.href = `index.html#team-${newId}`;

    
  });
});
