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
    <div data-id=${world.id}>
      <h3>${world.attributes.name}</h3>
      <img src=${world.attributes.image_url}>
      <h3>${world.attributes.seed}
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
  debugger
  const nameInput = document.querySelector('#worldname-input').value
  const seedInput = document.querySelector('#worldseed-input').value
  const imgUrlInput = document.querySelector('#worldimg-input').value
  const descInput = document.querySelector('#worlddesc-input').value
  const creatorInput = document.querySelector('#worldcreator-input').value
  postFetch(nameInput, seedInput, imgUrlInput, descInput, creatorInput)
}

function postFetch(name, seed, imgUrl, desc, creator) {

}