// Utility class for building Login Form
class LoginForm {
  constructor(id) {
    this.rootNode = document.createElement("FORM");
    this.email = document.createElement("INPUT");
    this.password = document.createElement("INPUT");
    this.submit = document.createElement("BUTTON");
    this.buildHTML();
  }

  buildHTML = () => {
    this.addElAttrs(this.rootNode, {id: 'LoginForm'})
    this.addElAttrs(this.email, {
      tagType: 'email',
      id: 'EmailInput',
      className: 'LoginInput',
      required: true
    })
    labelFor(this.email, 'EmailInput')
    this.rootNode.appendChild(this.email)

    this.addElAttrs(this.password, {
      type: 'password',
      id: 'PasswordInput',
      className: 'LoginInput',
      required: true
    })
    labelFor(this.password, 'PasswordInput')
    this.rootNode.appendChild(this.password)

    this.addElAttrs(this.submit, {
      type: 'submit',
      value: 'Sign In',
    })
    this.rootNode.appendChild(this.submit)

    return this.rootNode;
    // build the html and attributes needed to build the login form with javascript
    // this.defaultFields.forEach(el => form.appendChild(el))
  }

  // arg must be valid html element attr for given node
  addElAttrs = (node, attrs) => {
    for (const a in attrs) {
      if (!node.hasAttribute(a)) {
        node[a] = attrs[a]
      }
    }
  };


}; // END LoginForm Class

const labelFor = (node) => {
  let labelTag = document.createElement('LABEL');
  labelTag.setAttribute('for', node.id)
  node.insertAdjacentElement('beforebegin', labelTag);
}

const render = (appendTo, pbNode) => {
    //function to render form in to html, and render the login form html
    appendTo.appendChild(pbNode)
  }
  // this should be a static class that builds the forms needed



class SignUpForm {
    // Add only specific information to use for signup for a user.
  
    // many methods should be inherited from the LoginForm class created to render the signup form, with one additional field for password confirmation
    //
}
