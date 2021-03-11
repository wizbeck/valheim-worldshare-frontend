const endPoint = "http://localhost:3000/api/v1/worlds"

document.addEventListener("DOMContentLoaded", () => {
  getWorlds();
  })

  const createWorldForm = document.querySelector('#world-form')
  createWorldForm.addEventListener("submit", (e) => handleNewWorld(e))

function getWorlds() {
  fetch(endPoint)
  .then(resp => resp.json())
  .then(worlds => { worlds.data.forEach(world => {
    const worldDiv = `
    <div id=${world.id}>
      <h3>${world.attributes.name}</h3>
      <img src=${world.attributes.image_url}>
      <h3>${world.attributes.seed} </h3>
      <p>${world.attributes.description}</p>
      <h5> Creator: ${world.attributes.creator} </h5>
      <button data-id=world${world.id}> ${world.attributes.likes} Likes </button>
    </div>
    ` 
    document.querySelector('#worlds-container').innerHTML += worldDiv
    })
  })
}

function handleNewWorld(e) {
  e.preventDefault()
  const nameInput = document.querySelector('#worldname-input').value
  const seedInput = document.querySelector('#worldseed-input').value
  const imgUrlInput = document.querySelector('#worldimg-input').value
  const descInput = document.querySelector('#worlddesc-input').value
  const creatorInput = document.querySelector('#worldcreator-input').value
  postFetch(nameInput, seedInput, descInput, imgUrlInput, creatorInput)
}

function postFetch(name, seed, description, image_url, creator) {
  fetch(endPoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: name,
      seed: seed,
      description: description,
      image_url: image_url,
      creator: creator
    })
  })
  .then(resp => resp.json())
  .then(world => { 
    const worldDiv = `
    <div data-id=${world.id}>
      <h3>${world.name}</h3>
      <img src=${world.image_url}>
      <h3>${world.seed} </h3>
      <p>${world.description}</p>
      <h5> Creator: ${world.creator} </h5>
      <button data-id=world${world.id}> ${world.likes} Likes </button>
    </div>
    ` 
    document.querySelector('#worlds-container').innerHTML += worldDiv
  })
}