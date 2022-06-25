// Utility class for building Login Form
class SignUpForm {
  constructor() {
    this.self = new DocumentFragment;
  }
    // Add only specific information to use for signup for a user.
    // many methods should be inherited from the LoginForm class created to render the signup form, with one additional field for password confirmation
    // buildTags should build
};

class LoginForm {
  constructor() {
    this.self = new DocumentFragment;
    this.buildForm(document.getElementById('forms'));
  }

  buildForm = (wrapper) => {
    // Form attributes
    let d = document.createElement('DIV');
    d.className = 'Wrapper__Login'
    let h = document.createElement('H1');
    h.className = 'Wrapper__LoginHeader'
    h.innerText = 'Log In';
    let f = document.createElement('FORM');
    f.action = '/login';
    f.method = 'post';
    f.id = 'LoginForm';

    // Email input
    this.buildInputLF(
      f,
      'text',
      'users[email]',
      'Email'
      );

    // Password input
    this.buildInputLF(
      f,
      'password',
      'users[password]',
      'Password'
    );

     let b = this.buildBtn('Log In');

    d.append(h, f, b);
    wrapper.append(d)

  };

  buildInputLF = (root, type='text', name=null, lblTxt='Input') => {
    // create a label for the id argument
    let d = document.createElement('DIV');
    let l = document.createElement('LABEL');
    let i =  document.createElement('INPUT');

    d.className = 'LFInput__Wrapper'
    l.className = 'LF__Label';
    l.setAttribute('for', name);
    l.innerText = lblTxt;
    i.className = `LFInput__${type}`;
    i.id = name;

    d.append(l, i);
    root.append(d);
    // create an input with attributes
  }

  buildBtn = (txt) => {
    let b = document.createElement("BUTTON");
    b.type = 'submit';
    b.innerText = txt;
    return b;
  }


}
