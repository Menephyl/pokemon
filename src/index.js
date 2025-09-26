// src/index.js
document.addEventListener("DOMContentLoaded", () => {
  const storageKey = "pokeTeams"
  const allTeams   = JSON.parse(localStorage.getItem(storageKey) || "[]")

  const uniqueTeams = Object.values(
    allTeams.reduce((acc, team) => {
      acc[team.id] = team
      return acc
    }, {})
  )

  
  const tbody = document.querySelector(".teams-table tbody")
  tbody.innerHTML = ""
  uniqueTeams.forEach(team => {
    const tr = document.createElement("tr")
    tr.id = `team-${team.id}`
    tr.innerHTML = `
      <td>${team.id}</td>
      <td>${team.name}</td>
      <td>${team.pokemons.length}</td>
      <td>
        <button class="edit-btn"  data-id="${team.id}">Edit</button>
   
      <button class="delete-btn" data-id="${team.id}">Delete</button>
      </td>`
    tbody.appendChild(tr)
  })



  const lastTeam = uniqueTeams.at(-1)
  const section  = document.getElementById("last-team")
  const grid     = section.querySelector(".last-pokemon-grid")

  section.querySelector("h3").textContent = `Último time salvo: ${lastTeam.name}`
  grid.innerHTML = ""

  lastTeam.pokemons.forEach(p => {
   
    const orig   = p.originalName || p.name
    const gifUrl = `https://play.pokemonshowdown.com/sprites/ani/${orig.toLowerCase()}.gif`
   
    const displayName = p.customName || orig

    const fig = document.createElement("figure")
    fig.classList.add("pokemon-card")
    fig.innerHTML = `
      <div class="card__image-container">
        <img src="${gifUrl}" alt="${displayName}">
      </div>
      <figcaption class="card__caption">
        <p class="card__name">${displayName}</p>
      </figcaption>`
    grid.appendChild(fig)
  })

  section.classList.remove("hidden")
})
