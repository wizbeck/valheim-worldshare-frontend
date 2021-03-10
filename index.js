const endPoint = "http://localhost:3000/api/v1/worlds"

document.addEventListener("DOMContentLoaded", () => {
  getWorlds();
  })

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