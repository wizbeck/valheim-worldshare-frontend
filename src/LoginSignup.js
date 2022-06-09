// Utility class for building Login Form
class LoginForm {
  constructor() {
    this.rootNode = document.createElement("FORM");
    this.email = document.createElement("INPUT");
    this.password = document.createElement("INPUT");
  }

  buildHTML = () => {
    // let form = this.parent;
    console.log('This is the build HTML function for static class static method')
    // build the html and attributes needed to build the login form with javascript
    // this.defaultFields.forEach(el => form.appendChild(el))
  };

  // arg must be valid html element attr for given node
  addElAttrs = (node, {...args}) => {
    Object.entries(args).forEach((attr, val) => {
      if (node.hasAttribute(attr)) {
        node[attr] = val;
      }
    })
  }

  render = (appendTo) => {
    //function to render form in to html, and render the login form html
    appendTo.appendChild(this.buildHTML())
  }
  // this should be a static class that builds the forms needed
}


class SignUpForm {
    // Add only specific information to use for signup for a user.
  
    // many methods should be inherited from the LoginForm class created to render the signup form, with one additional field for password confirmation
    //
}
