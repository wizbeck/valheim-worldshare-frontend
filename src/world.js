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

  renderWorld() {

    let div = document.createElement("div.worlds")
    let h3 = document.createElement("h3")
    let imgUrl = document.createElement("img")
    let h4 = document.createElement("h4")
    let p = document.createElement("p")
    let h5 = document.createElement("h5")
    let button = document.createElement("button")

    div.id = `world${this.id}`
    div.class = "world"
    h3.innerText = `${this.name}`
    imgUrl.src = `${this.image_url}`
    imgUrl.style = "max-width: 60%;"
    h4.innerText = `Seed: ${this.seed}`
    p.innerText = `${this.description}`
    h5.innerText = `Creator: ${this.creator}`
    button.id = `btn-${this.id}`
    button.innerText = `${this.likes} Likes`
    // add button event listener to handle likes eventually

    div.append(h3, imgUrl, h4, p, h5, button)

    let commentDiv = document.createElement("div")
    let detail = document.createElement("details")
    let summ = document.createElement("summary")
    let ul = document.createElement("ul")

    commentDiv.id = `comments${this.id}`
    summ.innerText = "Comments:"
    

    
    let worldContainer = document.querySelector('#worlds-container')
    worldContainer.append(div)

    
  }


  // renderWorldDiv() {
  //   return `
  //     <div style="border: solid 3px #CCC;" id="world${this.id}">
  //       <h3>${this.name}</h3>
  //       <img style="max-width: 60%;" alt="map image" src=${this.image_url}>
  //       <h4>Seed: ${this.seed} </h4>
  //       <p>${this.description}</p>
  //       <h5> Creator: ${this.creator} </h5>
  //       <button class="like-btn" world-id=${this.id}>${this.likes} Likes</button>
  //       <div id="comments${this.id}">
  //         <details>
  //         <summary> Comments: </summary> 
  //         <ul>
  //         </ul>
  //         <br>
  //         <h4> Leave a comment for ${this.name}: </h4>
  //         <form id="commentform-${this.id}">
  //             <textarea id="commentcontent-input" name="content" rows="3" cols="40" placeholder="Write your comment..." class="input-text"></textarea>
  //             <br>
  //             <input id="commentauthor-input" name="author" type="text" placeholder="Your name goes here..." class="input-text">
  //             <br>
  //             <input class="createcomment-btn" id="comment${this.id}" type="submit" name="submit" value="Post Comment">
  //           </form>
  //     </div>
  //     ` 
  // }

  // renderComments() {
  //   this.comments.forEach(comment => {
  //     let li = document.createElement("li")
  //     let pContent = document.createElement("p")
  //     let pAuthor = document.createElement("p")
  //     pContent.innerText = `"${comment.content}"`
  //     pAuthor.innerText = `- ${comment.author}`
  //     li.append(pContent, pAuthor)
  //     let commentBox = document.querySelector(`#comments${this.id}`).children[0].children[1]
  //     commentBox.appendChild(li)  
  //   })
  // }


}

World.all = [];