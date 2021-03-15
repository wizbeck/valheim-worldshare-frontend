class Comment {
  constructor(comment, commentAttributes) {
    this.id = comment.id,
    this.content = commentAttributes.content,
    this.author = commentAttributes.author,
    this.world_id = commentAttributes.world_id,
    Comment.all.push(this)
  }

  renderComment() {
    debugger
    let ul = document.getElementById(`comments${this.world_id}`).children[0].children[1]
    let li = document.createElement("li")
    let pContent = document.createElement("p")
    let pAuthor = document.createElement("p")
    pContent.innerText = `"${this.content}"`
    pAuthor.innerText = `- ${this.author}`
    li.append(pContent, pAuthor)
    ul.append(li)
  }


}
Comment.all = [];