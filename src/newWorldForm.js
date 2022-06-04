const loadNewWorldForm = (root) => {
  // FORM CONTAINER
  let parent = buildElWithAttrs(
    document.createElement('DIV'),
    {id: 'formContainer'}
  );
  let form = buildElWithAttrs(
    document.createElement('FORM'),
    {
      id: 'worldForm'
    }
  );
  let header = document.createElement('h3');
  header.innerHTML = 'Share your Worlds!';
  parent.appendChild(header);

  // BEGIN CHILDREN
  let formInputs = [];
  // name
  formInputs[0] = buildElWithAttrs(
    document.createElement('INPUT'),
    {
      type: 'text',
      id: 'worldname-input',
      name: 'name',
      placeholder: 'World Name',
      class: 'input-text',
    }
  );
  // seed
  formInputs[1] = buildElWithAttrs(
    document.createElement('INPUT'),
    {
      type: 'text',
      id: 'worldseed-input',
      name: 'seed',
      placeholder: 'World Seed Code',
      class: 'text-input'
    }
  );
  // imageUrl
  formInputs[2] = buildElWithAttrs(
    document.createElement('INPUT'),
    {
      type: 'text',
      id: 'worldimg-input',
      name: 'image_url',
      placeholder: 'Image URL',
      class: 'input-text',
    }
  );
  // Description
  formInputs[3] = buildElWithAttrs(
    document.createElement('TEXTAREA'),
    {
      id: 'worlddesc-input',
      name: 'description',
      rows: '5',
      cols: '60',
      placeholder: 'Describe your World...',
      class: 'input-text'
    }
  );
  // Submit Button
  formInputs[4] = buildElWithAttrs(
    document.createElement('INPUT'),
    {
      id: 'create-btn',
      type: 'submit',
      name: 'submit',
      value: 'Share World Info'
    }
  );
  // Append children to form
  while (formInputs.length > 0) {
    form.appendChild(formInputs.shift())
    if (formInputs.length != 0) {
      form.appendChild(document.createElement('br'))
    }
  }
  parent.appendChild(form);
  root.appendChild(parent);
}
// global function for building html nodes with attributes
const buildElWithAttrs = (node, attrs={}) => {
  if (Object.entries(attrs).length > 0) {
    for (let [attr, value] of Object.entries(attrs)) {
      node.setAttribute(attr, value)
    }
  }
  return node;
};
