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
      <div id=${this.id}>
        <h3>${this.name}</h3>
        <img src=${this.image_url} alt="map image" width="250: height="300">
        <h3>${this.seed} </h3>
        <p>${this.description}</p>
        <h5> Creator: ${this.creator} </h5>
        <button data-id=world${this.id}> ${this.likes} Likes </button>
      </div>
      ` 
  }
}

World.all = [];