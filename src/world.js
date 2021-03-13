class World {
  constructor(world, worldAttributes) {
    this.id = world.id
    this.name = worldAttributes.name
    this.seed = worldAttributes.seed
    this.description = worldAttributes.description
    this.image_url = worldAttributes.image_url
    this.creator = worldAttributes.creator
    this.likes = worldAttributes.likes
    this.comments = worldAttributes.comments
    World.all.push(this)
  }

  renderWorldDiv() {
    return `
      <div style="border: solid 3px #CCC;" id="world${this.id}">
        <h3>${this.name}</h3>
        <img style="max-width: 60%;" alt="map image" src=${this.image_url}>
        <h4>Seed: ${this.seed} </h4>
        <p>${this.description}</p>
        <h5> Creator: ${this.creator} </h5>
        <button class="like-btn" world-id=${this.id}>${this.likes} Likes</button>
        <div id="comments${this.id}">
          <details>
          <summary> Comments: </summary> 
          <ul>
          </ul>
      </div>
      ` 
  }

  renderComments() {
    this.comments.forEach(comment => {
      let commentBox = document.querySelector(`#comments${this.id}`).children[0].children[1]
      commentBox.innerHTML += `
      <li>
        <p>${comment.content}</p>
        <p> Written By: ${comment.author}
      </li>
      `
    })
  }

}

World.all = [];