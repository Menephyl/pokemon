(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const noTeamsMsg  = document.getElementById('no-teams-msg');
    const teamsCont   = document.getElementById('teams-container');
    const tbody       = document.getElementById('team-table-body');
    const searchInput = document.getElementById('search-input');

    const getTeams = () => JSON.parse(localStorage.getItem('pokeTeams')) || [];
    const setTeams = (teams) => localStorage.setItem('pokeTeams', JSON.stringify(teams));

    const renderTable = (teams) => {
      if (!tbody) return;
      tbody.innerHTML = '';
      const frag = document.createDocumentFragment();

      teams.forEach(team => {
        const tr = document.createElement('tr');
        tr.id = `team-${team.id}`;
        tr.innerHTML = `
          <td>${team.id}</td>
          <td>${team.name}</td>
          <td>${team.pokemons?.length ?? 0}</td>
          <td class="table-actions">
            <button class="table-btn edit-btn"   data-id="${team.id}">Editar</button>
            <button class="table-btn delete-btn" data-id="${team.id}">Deletar</button>
          </td>
        `;
        frag.appendChild(tr);
      });

      tbody.appendChild(frag);
    };

    const teams = getTeams();

    if (!teams.length) {
      noTeamsMsg?.classList.remove('hidden');
      teamsCont?.classList.add('hidden');
      return;
    }

    noTeamsMsg?.classList.add('hidden');
    teamsCont?.classList.remove('hidden');
    renderTable(teams);

    // Hash: destaca e faz scroll suave
    const { hash } = window.location;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.classList.add('highlight-row');
        setTimeout(() => target.classList.add('fade-out'), 2000);
      }
    }

    // Filtro por nome (case-insensitive)
    if (searchInput) {
      let lastValue = '';
      const onSearch = () => {
        const term = searchInput.value.trim().toLowerCase();
        if (term === lastValue) return;
        lastValue = term;
        tbody.querySelectorAll('tr').forEach(tr => {
          const name = tr.children[1]?.textContent?.toLowerCase() || '';
          tr.style.display = name.includes(term) ? '' : 'none';
        });
      };
      searchInput.addEventListener('input', onSearch);
    }

    // Delegação: Editar / Deletar
    tbody.addEventListener('click', (e) => {
      const btn = e.target;
      if (!(btn instanceof HTMLElement)) return;

      const id = Number(btn.dataset.id);
      if (Number.isNaN(id)) return;

      if (btn.classList.contains('delete-btn')) {
        if (!confirm('Tem certeza que deseja deletar este time?')) return;
        const updated = getTeams().filter(t => t.id !== id);
        setTeams(updated);

        if (!updated.length) {
          noTeamsMsg?.classList.remove('hidden');
          teamsCont?.classList.add('hidden');
        } else {
          renderTable(updated);
        }
        return;
      }

      if (btn.classList.contains('edit-btn')) {
        window.location.href = `createTeams.html?edit=${id}`;
      }
    });
  });
})();
