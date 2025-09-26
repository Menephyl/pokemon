// main.js
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("body-base");
  document.querySelector("header")?.classList.add("header-base");
  document.getElementById("menu")?.classList.add("menu-base");
  document.getElementById("nav")?.classList.add("nav-base");
  document.querySelector(".links")?.classList.add("links-base");

  const myBtn = document.querySelector(".btn-menu");
  const crtBtn = document.querySelector(".btn-menu2");
  [myBtn, crtBtn].forEach(b => b?.classList.add("menu-btn"));
  myBtn?.classList.add("active-btn");
  document.querySelector(".team-status")?.classList.add("status-title");

  if (!document.querySelector(".create-team-main-btn")) {
    const btn = document.createElement("button");
    btn.textContent = "Create Team";
    btn.classList.add("create-team-main-btn");
    btn.addEventListener("click", () => location.href = "createTeams.html");
    document.querySelector("main")?.before(btn);
  }

  document.querySelector(".save-area")?.classList.add("create-main");

  const cont = document.getElementById("teams-container");
  const msg  = document.getElementById("no-teams-msg");
  const body = document.getElementById("team-table-body");
  const teams = JSON.parse(localStorage.getItem("pokeTeams")) || [];

  if (!teams.length) {
    msg?.classList.remove("hidden");
    cont?.classList.add("hidden");
  } else {
    msg?.classList.add("hidden");
    cont?.classList.remove("hidden");
    body.innerHTML = "";
    teams.forEach(t => {
      const tr = document.createElement("tr");
      tr.id = `team-${t.id}`;
      tr.innerHTML = `
        <td>${t.id}</td>
        <td>${t.name}</td>
        <td>${t.pokemons.length}</td>
        <td class="table-actions">
          <button class="table-btn edit-btn"   data-id="${t.id}">Editar</button>
          <button class="table-btn delete-btn" data-id="${t.id}">Deletar</button>
        </td>`;
      body.appendChild(tr);
    });
  }

  body.addEventListener("click", e => {
    const b = e.target;
    const id = Number(b.dataset.id);
    if (b.classList.contains("delete-btn")) {
      if (!confirm("Deletar?")) return;
      const upd = teams.filter(x => x.id !== id);
      localStorage.setItem("pokeTeams", JSON.stringify(upd));
      location.reload();
    }
    if (b.classList.contains("edit-btn")) {
      location.href = `createTeams.html?edit=${id}`;
    }
  });

  renderLastTeam();
});

function renderLastTeam() {
  const arr = JSON.parse(localStorage.getItem("pokeTeams")) || [];
  if (!arr.length) return;
  const last = arr[arr.length - 1];
  const c = document.createElement("div");
  c.classList.add("last-team");
  c.innerHTML = `<h3>Último time salvo:</h3>`;
  const g = document.createElement("div");
  g.classList.add("last-pokemon-grid");
  last.pokemons.forEach(p => {
    const card = document.createElement("figure");
    card.classList.add("pokemon-card", `card--${p.types?.[0]||""}`);
    card.innerHTML = `
      <div class="card__image-container">
        <img src="https://play.pokemonshowdown.com/sprites/ani/${p.originalName.toLowerCase()}.gif"
             alt="${p.customName||p.originalName}">
      </div>
      <figcaption class="card__caption">
        <p class="card__name">${p.customName||p.originalName}</p>
      </figcaption>`;
    g.appendChild(card);
  });
  c.appendChild(g);
  document.querySelector(".create-team-main-btn")?.after(c);
}
