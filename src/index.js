const endPoint = "http://localhost:3000/api/v1/worlds"
const commentsEndPoint = "http://localhost:3000/api/v1/comments"

document.addEventListener("DOMContentLoaded", () => {
  getWorlds();
  })

  const createWorldForm = document.querySelector('#world-form')
  createWorldForm.addEventListener("submit", (e) => handleNewWorld(e))
  const worldContainer = document.getElementById('worlds-container')

function getWorlds() {
  fetch(endPoint)
  .then(resp => resp.json())
  .then(worlds => { worlds.data.forEach(world => {
    let newWorld = new World(world, world.attributes)
    newWorld.renderWorld();
      })
    })
  }


const handleNewWorld = (e) => {
  e.preventDefault()
  const nameInput = document.querySelector('#worldname-input').value
  const seedInput = document.querySelector('#worldseed-input').value
  const imgUrlInput = document.querySelector('#worldimg-input').value
  const descInput = document.querySelector('#worlddesc-input').value
  const creatorInput = document.querySelector('#worldcreator-input').value
  postFetch(nameInput, seedInput, descInput, imgUrlInput, creatorInput)
}

function handleNewComment(e) {
  e.preventDefault();
      const worldId = parseInt(e.target.children[2].id.split('-')[1])
      const commentContent = e.target.children[0].value
      const commentAuthor = e.target.children[1].value
  fetch(commentsEndPoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      content: commentContent,
      author: commentAuthor,
      world_id: worldId
    })
  })
  .then(resp => resp.json())
  .then(comment => {
    let commentData = comment.data
    debugger
    let newComment = new Comment(commentData, commentData.attributes)
    
    newComment.renderComment();
  })
  
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
    newWorld.renderWorld();
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

  
// function createLikeBtn(btn) {
//   btn.addEventListener("click", (e) => {
//     e.preventDefault()
//     debugger
//     let worldId = parseInt(e.target.attributes['world-id'].value)
//     let worldLikes = parseInt(e.target.innerHTML.split(' ')[0])
//     worldLikes += 1
//     e.target.innerHTML = `${parseInt(e.target.innerHTML.split(' ')[0]) + 1}` + ' Likes'
//     patchFetch(worldId, worldLikes);
//   })
// }



