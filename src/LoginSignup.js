class LoginForm {
  static defaultFields = {
    email: document.createElement("INPUT"),
    password: document.createElement("INPUT"),
  }
  constructor(targetNode, fields={}) {
    this.self ||= document.createElement('FORM')
    this.fields = {...defaultFields, ...fields}
    this.html = buildHTML();   // use a class to help generate forms easily with instance methods for rendering and 'logging in'/checking authentication
  }

  buildHTML = (parent) => {
    // build the html and attributes needed to build the login form with javascript 
    

    parent.appendChild(this) // this should refer to the instance of the LoginForm class instantiated.
  }

  render = (rootNode) => {
    //function to render form in to html, and render the login form html
    rootNode.appendChild(rootNode)
  }
  // we should establish some sort of state in case the login fails, we can keep at the least the email value persisted on form submit

  submit = () => {
    // this function should submit the form to the specific route from the rails api, 
    // fetch post request to api, submit should then take the api key and store it in cookies/session    
  }
}


class SignUpForm extends LoginForm {
  constructor() {
    super()
    // Add only specific information to use for signup for a user.

    // many methods should be inherited from the LoginForm class created to render the signup form, with one additional field for password confirmation
    //
  }
}
