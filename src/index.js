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
    let newWorld = new World(world, world.attributes)
    document.querySelector('#worlds-container').innerHTML += newWorld.renderWorldDiv()
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
    const worldData = world.data
    let newWorld = new World(worldData, worldData.attributes)
    document.querySelector('#worlds-container').innerHTML += newWorld.renderWorldDiv()
  })
}
