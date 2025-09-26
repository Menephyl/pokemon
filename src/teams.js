// teams.js
document.addEventListener("DOMContentLoaded", async () => {
  const available = document.getElementById("available-pokemon")
  const teamSection = document.getElementById("team-section")
  const cardsWrapper = document.querySelector(".team-cards")
  const saveArea = document.querySelector(".save-area")
  const saveBtn = document.getElementById("save-team")
  const nameInput = document.getElementById("name-team")
  let limit = 8, offset = 0
  let selectedPokemons = []

  function createPaginationOnce() {
    if (document.getElementById("previous")) return
    const pc = document.createElement("div")
    pc.classList.add("pagination-container")
    const prev = document.createElement("button")
    prev.id = "previous"
    prev.textContent = "<< Previous"
    prev.classList.add("pagination-btn", "btn-previous")
    const next = document.createElement("button")
    next.id = "next"
    next.textContent = "Next >>"
    next.classList.add("pagination-btn", "btn-next")
    pc.append(prev, next)
    saveArea.after(pc)
    prev.addEventListener("click", async () => {
      offset = Math.max(0, offset - limit)
      await loadPage()
    })
    next.addEventListener("click", async () => {
      offset += limit
      await loadPage()
    })
  }

  async function fetchList(l, o) {
    const r = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${l}&offset=${o}`)
    if (!r.ok) throw ""
    return (await r.json()).results
  }

  async function fetchData(n) {
    const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`)
    if (!r.ok) throw ""
    return await r.json()
  }

  async function loadPage() {
    available.innerHTML = ""
    try {
      const list = await fetchList(limit, offset)
      const poks = await Promise.all(list.map(p => fetchData(p.name)))
      poks.forEach(renderAvailableCard)
    } catch {
      available.textContent = "Erro ao carregar Pokémons."
    }
  }

  function renderAvailableCard(p) {
    const f = document.createElement("figure")
    f.classList.add("pokemon-card")
    f.innerHTML = `
      <div class="card__image-container">
        <img src="${p.sprites.other['official-artwork'].front_default}" alt="${p.name}">
      </div>
      <figcaption class="card__caption">
        <button class="btn btn-sm btn-outline-secondary">Add Pokémon</button>
        <button class="btn-sm btn-danger">Details</button>
      </figcaption>`
    f.querySelector(".btn-outline-secondary").addEventListener("click", () => addToTeam(p))
    f.querySelector(".btn-danger").addEventListener("click", () => openDetails(p))
    available.appendChild(f)
  }

  function addToTeam(pokemon) {
    if (selectedPokemons.some(p => p.name === pokemon.name)) return
    selectedPokemons.push({
      name: pokemon.name,
      sprite: pokemon.sprites.other['official-artwork'].front_default,
      types: pokemon.types.map(t => t.type.name)
    })
    teamSection.classList.remove("hidden")
    const fig = document.createElement("figure")
    fig.classList.add("pokemon-card", `card--${pokemon.types[0].type.name}`)
    fig.innerHTML = `
      <div class="card__image-container">
        <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
      </div>
      <figcaption class="card__caption">
        <input type="text" class="team-input" placeholder="put Name">
        <p class="team-card-name">${pokemon.name}</p>
        <button class="delete-btn">Remove</button>
      </figcaption>`
    fig.querySelector(".delete-btn").addEventListener("click", () => {
      selectedPokemons = selectedPokemons.filter(p => p.name !== pokemon.name)
      fig.remove()
      if (!selectedPokemons.length) teamSection.classList.add("hidden")
    })
    cardsWrapper.appendChild(fig)
  }

  function openDetails(p) {
    const m = document.getElementById("pokemon-modal")
    const b = m.querySelector(".modal-body")
    const gif = `https://play.pokemonshowdown.com/sprites/ani/${p.name.toLowerCase()}.gif`
    const stats = p.stats.map(s => `<li><strong>${s.stat.name}:</strong> ${s.base_stat}</li>`).join("")
    const abs = p.abilities.map((a, i) => `<li>${i+1}° ${a.ability.name}</li>`).join("")
    b.innerHTML = `
      <img src="${p.sprites.other['official-artwork'].front_default}" alt="${p.name}">
      <h2>${p.name}</h2>
      <ul>${stats}</ul>
      <ul>${abs}</ul>
      <img src="${gif}" class="pixel-sprite">`
    m.classList.remove("hidden")
  }

  document.querySelector(".modal-close")?.addEventListener("click", () => {
    document.getElementById("pokemon-modal")?.classList.add("hidden")
  })
  document.getElementById("pokemon-modal")?.addEventListener("click", e => {
    if (e.target.id === "pokemon-modal") e.target.classList.add("hidden")
  })

  saveBtn.addEventListener("click", () => {
    const teamName = nameInput.value.trim()
    if (!teamName) {
      alert("Digite o nome do time.")
      return
    }
    if (!selectedPokemons.length) {
      alert("Adicione pelo menos um Pokémon ao time.")
      return
    }
    const storageKey = "pokeTeams"// teams.js
document.addEventListener("DOMContentLoaded", async () => {
  const available = document.getElementById("available-pokemon")
  const teamSection = document.getElementById("team-section")
  const cardsWrapper = document.querySelector(".team-cards")
  const saveArea = document.querySelector(".save-area")
  const saveBtn = document.getElementById("save-team")
  const nameInput = document.getElementById("name-team")
  let limit = 8, offset = 0
  let selectedPokemons = []

  function createPaginationOnce() {
    if (document.getElementById("previous")) return
    const pc = document.createElement("div")
    pc.classList.add("pagination-container")
    const prev = document.createElement("button")
    prev.id = "previous"
    prev.textContent = "<< Previous"
    prev.classList.add("pagination-btn", "btn-previous")
    const next = document.createElement("button")
    next.id = "next"
    next.textContent = "Next >>"
    next.classList.add("pagination-btn", "btn-next")
    pc.append(prev, next)
    saveArea.after(pc)
    prev.addEventListener("click", async () => {
      offset = Math.max(0, offset - limit)
      await loadPage()
    })
    next.addEventListener("click", async () => {
      offset += limit
      await loadPage()
    })
  }

  async function fetchList(l, o) {
    const r = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${l}&offset=${o}`)
    if (!r.ok) throw ""
    return (await r.json()).results
  }

  async function fetchData(n) {
    const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`)
    if (!r.ok) throw ""
    return await r.json()
  }

  async function loadPage() {
    available.innerHTML = ""
    try {
      const list = await fetchList(limit, offset)
      const poks = await Promise.all(list.map(p => fetchData(p.name)))
      poks.forEach(renderAvailableCard)
    } catch {
      available.textContent = "Erro ao carregar Pokémons."
    }
  }

  function renderAvailableCard(p) {
    const f = document.createElement("figure")
    f.classList.add("pokemon-card")
    f.innerHTML = `
      <div class="card__image-container">
        <img src="${p.sprites.other['official-artwork'].front_default}" alt="${p.name}">
      </div>
      <figcaption class="card__caption">
        <button class="btn btn-sm btn-outline-secondary">Add Pokémon</button>
        <button class="btn-sm btn-danger">Details</button>
      </figcaption>`
    f.querySelector(".btn-outline-secondary").addEventListener("click", () => addToTeam(p))
    f.querySelector(".btn-danger").addEventListener("click", () => openDetails(p))
    available.appendChild(f)
  }

  function addToTeam(pokemon) {
    if (selectedPokemons.some(p => p.name === pokemon.name)) return
    selectedPokemons.push({ name: pokemon.name, sprite: pokemon.sprites.other['official-artwork'].front_default, types: pokemon.types.map(t => t.type.name) })
    teamSection.classList.remove("hidden")
    const fig = document.createElement("figure")
    fig.dataset.name = pokemon.name
    fig.classList.add("pokemon-card")
    fig.innerHTML = `
      <div class="card__image-container">
        <img src="https://play.pokemonshowdown.com/sprites/ani/${pokemon.name.toLowerCase()}.gif" alt="${pokemon.name}">
      </div>
      <figcaption class="card__caption">
        <input type="text" class="team-input" placeholder="put Name">
        <p class="team-card-name">${pokemon.name}</p>
        <button class="delete-btn">Remove</button>
      </figcaption>`
    fig.querySelector(".delete-btn").addEventListener("click", () => {
      selectedPokemons = selectedPokemons.filter(p => p.name !== pokemon.name)
      fig.remove()
      if (!selectedPokemons.length) teamSection.classList.add("hidden")
    })
    cardsWrapper.appendChild(fig)
  }

  function openDetails(p) {
    const m = document.getElementById("pokemon-modal")
    const b = m.querySelector(".modal-body")
    const gif = `https://play.pokemonshowdown.com/sprites/ani/${p.name.toLowerCase()}.gif`
    const stats = p.stats.map(s => `<li><strong>${s.stat.name}:</strong> ${s.base_stat}</li>`).join("")
    const abs = p.abilities.map((a, i) => `<li>${i+1}° ${a.ability.name}</li>`).join("")
    b.innerHTML = `
      <img src="${p.sprites.other['official-artwork'].front_default}" alt="${p.name}">
      <h2>${p.name}</h2>
      <ul>${stats}</ul>
      <ul>${abs}</ul>
      <img src="${gif}" class="pixel-sprite">`
    m.classList.remove("hidden")
  }

  document.querySelector(".modal-close")?.addEventListener("click", () => {
    document.getElementById("pokemon-modal")?.classList.add("hidden")
  })
  document.getElementById("pokemon-modal")?.addEventListener("click", e => {
    if (e.target.id === "pokemon-modal") e.target.classList.add("hidden")
  })

  saveBtn.addEventListener("click", () => {
    const teamName = nameInput.value.trim()
    if (!teamName) return alert("Digite o nome do time.")
    if (!selectedPokemons.length) return alert("Adicione pelo menos um Pokémon ao time.")
    cardsWrapper.querySelectorAll("figure").forEach(fig => {
      const original = fig.dataset.name
      const nick = fig.querySelector(".team-input").value.trim() || original
      const idx = selectedPokemons.findIndex(p => p.name === original)
      if (idx > -1) selectedPokemons[idx].nickname = nick
    })
    const storageKey = "pokeTeams"
    const all = JSON.parse(localStorage.getItem(storageKey) || "[]")
    all.push({ id: Date.now(), name: teamName, pokemons: selectedPokemons })
    localStorage.setItem(storageKey, JSON.stringify(all))
    window.location.href = "index.html"
  })

  createPaginationOnce()
  await loadPage()
})

    const all = JSON.parse(localStorage.getItem(storageKey) || "[]")
    const newTeam = {
      id: Date.now(),
      name: teamName,
      pokemons: selectedPokemons
    }
    all.push(newTeam)
    localStorage.setItem(storageKey, JSON.stringify(all))
    window.location.href = "index.html"
  })

  createPaginationOnce()
  await loadPage()
})
