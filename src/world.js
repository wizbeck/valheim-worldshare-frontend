class World {
  constructor(world, worldAttributes) {
    this.id = world.id
    this.name = worldAttributes.name
    this.seed = worldAttributes.seed
    this.description = worldAttributes.description
    this.image_url = worldAttributes.image_url
    this.creator = worldAttributes.creator
    this.likes = worldAttributes.likes
    World.all.push(this)
  }

  renderWorldDiv() {
    return `
      <div style="border: solid 1px #CCC;" id="world${this.id}">
        <h3>${this.name}</h3>
        <img style="max-width: 60%;" alt="map image" src=${this.image_url}>
        <h4>Seed: ${this.seed} </h4>
        <p>${this.description}</p>
        <h5> Creator: ${this.creator} </h5>
        <button class="like-btn" world-id=${this.id}>${this.likes} Likes</button>
      </div>
      ` 
  }

}

World.all = [];