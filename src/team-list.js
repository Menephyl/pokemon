// teams-list.js
(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const noTeamsMsg = document.getElementById("no-teams-msg");
    const teamsCont  = document.getElementById("teams-container");
    const tbody      = document.getElementById("team-table-body");

    const savedTeams = JSON.parse(localStorage.getItem("pokeTeams")) || [];

    if (savedTeams.length === 0) {
      noTeamsMsg.classList.remove("hidden");
      teamsCont.classList.add("hidden");
      return;
    }

    noTeamsMsg.classList.add("hidden");
    teamsCont.classList.remove("hidden");

    savedTeams.forEach(team => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${team.id}</td>
        <td>${team.name}</td>
        <td>${team.pokemons.length}</td>
        <td>
          <button class="edit-btn" data-id="${team.id}">Edit</button>
          <button class="delete-btn" data-id="${team.id}">Delete</button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    tbody.addEventListener("click", e => {
      // delete
      if (e.target.classList.contains("delete-btn")) {
        const id = +e.target.dataset.id;
        if (!confirm("Delete this team?")) return;
        let teams = JSON.parse(localStorage.getItem("pokeTeams")) || [];
        teams = teams.filter(t => t.id !== id).map((t, i) => ({ ...t, id: i }));
        localStorage.setItem("pokeTeams", JSON.stringify(teams));
        window.location.reload();
      }

      // edit
      if (e.target.classList.contains("edit-btn")) {
        const id = +e.target.dataset.id;
        window.location.href = `createTeams.html?edit=${id}`;
      }
    });
  });
})();