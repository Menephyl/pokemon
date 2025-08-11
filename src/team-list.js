
(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const noTeamsMsg   = document.getElementById('no-teams-msg');
    const teamsCont    = document.getElementById('teams-container');
    const tbody        = document.getElementById('team-table-body');
    const searchInput  = document.getElementById('search-input');

    const loadTeams = () =>
      JSON.parse(localStorage.getItem('pokeTeams')) || [];

    const savedTeams = loadTeams();

    if (savedTeams.length === 0) {
      noTeamsMsg.classList.remove('hidden');
      teamsCont.classList.add('hidden');
      return;
    }

    noTeamsMsg.classList.add('hidden');
    teamsCont.classList.remove('hidden');

    savedTeams.forEach(team => {
      const tr = document.createElement('tr');
      tr.id = `team-${team.id}`;
      tr.innerHTML = `
        <td>${team.id}</td>
        <td>${team.name}</td>
        <td>${team.pokemons.length}</td>
        <td>
          <button class="edit-btn"   data-id="${team.id}">Editar</button>
          <button class="delete-btn" data-id="${team.id}">Deletar</button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    // Scroll suave + destaque da linha (se existir hash)
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.classList.add('highlight-row');
        setTimeout(() => {
          target.classList.add('fade-out');
        }, 2000);
      }
    }

    // Filtro em tempo real por nome
    searchInput.addEventListener('input', () => {
      const term = searchInput.value.trim().toLowerCase();
      tbody.querySelectorAll('tr').forEach(tr => {
        const name = tr.children[1].textContent.toLowerCase();
        tr.style.display = name.includes(term) ? '' : 'none';
      });
    });

    // Delegação de evento para Edit/Delete
    tbody.addEventListener('click', e => {
      const btn = e.target;
      const id  = Number(btn.dataset.id);

      if (btn.classList.contains('delete-btn')) {
        if (!confirm('Tem certeza que deseja deletar este time?')) return;
        const updated = loadTeams()
          .filter(t => t.id !== id)
          .map((t, i) => ({ ...t, id: i }));
        localStorage.setItem('pokeTeams', JSON.stringify(updated));
        window.location.reload();
      }

      if (btn.classList.contains('edit-btn')) {
        window.location.href = `createTeams.html?edit=${id}`;
      }
    });
  });
})();
