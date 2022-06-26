// Utility class for building Login Form
class LoginForm {
  constructor() {
    this.self = new DocumentFragment;
    this.buildForm(document.getElementById('content'));
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
      'user[email]',
      'Email'
      );

    // Password input
    this.buildInputLF(
      f,
      'password',
      'user[password]',
      'Password'
    );

     let b = this.buildBtn('Log In', 'INPUT');
    f.append(b);
    d.append(h, f);
    wrapper.append(d);

    let signUpBtn = this.buildBtn('Sign Up', 'BUTTON');
    signUpBtn.addEventListener('click', () => {
      swapToSignup(wrapper);
    })
    d.prepend(signUpBtn);

    // add event listener for sign up or login depending on which version of form is rendered
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      debugger
      let form = e.target;
      if (f.action.includes('login')) {
        signIn(form);
      } else if (f.action.includes('signup')) {
        signUp(form);
      }
    })
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

  buildBtn = (txt, tag) => {
    let b = document.createElement(tag);
    if (tag === 'INPUT') {
      b.type = 'submit';
      b.value = txt;
    } else {
      b.innerText = txt;
      b.id = 'Wrapper__LoginSwitch';
    }
    
    return b;
  }
};

// Global function to swap form to signup
const swapToSignup = (container) => {
  let h = container.querySelector('h1'),
      f = container.querySelector('form'),
      sbmt = container.querySelector('input[type="submit"]'),
      sgnUp = container.querySelector('#Wrapper__LoginSwitch')
  ;

  h.innerText = 'Join the Valheim WorldShare Community';
  f.action = '/signup';

  // password conf wrapper div
  let pcWrapper = document.createElement('DIV');
  pcWrapper.className = 'LFInput__Wrapper';
  
  // Password Confirmation input
  let passConf = document.createElement('INPUT');
  passConf.type = 'password';
  passConf.id = 'user[password_confirmation]';

  // Password Conf label (append first)
  let pcLabel = document.createElement('LABEL');
  pcLabel.innerText = 'Password Confirm'
  pcLabel.setAttribute('for', 'user[password_confirmation]');
  pcLabel.className = 'LF__Label'

  sbmt.value = 'Sign Up';
  sgnUp.innerText = 'Log In';
  sgnUp.addEventListener('click', () => {
    resetLogin(container);
  });

  pcWrapper.append(pcLabel, passConf);
  f.insertBefore(pcWrapper, sbmt);

  console.log('changed');
};

const resetLogin = (wrapper) => {
  wrapper.innerHTML = '';
  new LoginForm;
}


const signIn = (f) => {
  // Login else render error message in a container?
}

const signUp = (f) => {
  console.warn('in signUp');
  let inputs = f.querySelectorAll('input').filter( i => {
    i.type !== 'submit'
  })
  // collect all inputs from the form and build  a body object to be passed into the fetch function
  debugger
  // here we need to capture form data from submission to send via fetch
  // make fetch request to 'log in' to api for access with jti
  // fetch request for sign up
  fetch('http://localhost:3000/signup', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringfy({
      user: {
        ...formData
      }
    })
    .then(res => {
      // do somethin with res and set jti token to local storage
    })
    .catch(err => {
      throw new Error('Could not sign up user:', err)
    })
  })
}
