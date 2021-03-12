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
    let likeBtnsArray = Array.from(document.getElementsByClassName('like-btn'));
    likeBtnsArray.forEach(btn => {
      createLikeBtn(btn)
      // btn.addEventListener("click", (e) => {
      //   e.preventDefault()
      //   let worldId = parseInt(e.target.attributes['world-id'].value)
      //   let worldLikes = parseInt(e.target.innerHTML.split(' ')[0])
      //   worldLikes += 1
      //   e.target.innerHTML = `${parseInt(e.target.innerHTML.split(' ')[0]) + 1}` + ' Likes'
      //   patchFetch(worldId, worldLikes);
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

function patchFetch(worldId, updatedLikes) {
  fetch(`http://localhost:3000/api/v1/worlds/${worldId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({
        likes: updatedLikes
      })
    })
    .then(resp => resp.json())
    .then(resp => {console.log(resp + 'update successfully')
    })
  }

  function putWorldsOnDom(worlds) {
    worlds.data.forEach(world => {
      let newWorld = new World(world, world.attributes)
      document.querySelector('#worlds-container').innerHTML += newWorld.renderWorldDiv()
  })
}

function createLikeBtn(btn){
  btn.addEventListener("click", (e) => {
    e.preventDefault()
    let worldId = parseInt(e.target.attributes['world-id'].value)
    let worldLikes = parseInt(e.target.innerHTML.split(' ')[0])
    worldLikes += 1
    e.target.innerHTML = `${parseInt(e.target.innerHTML.split(' ')[0]) + 1}` + ' Likes'
    patchFetch(worldId, worldLikes);
  })
}