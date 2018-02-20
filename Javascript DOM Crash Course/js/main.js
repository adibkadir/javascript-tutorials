// create our variables to access elements
let form = document.getElementById('addForm');
let items = document.getElementById('items');
let filter = document.getElementById('filter');

// Add listeners for specific events
form.addEventListener('submit', addItem);
items.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

// Handle those events
function addItem(e) {
  e.preventDefault();
  let newItem = document.getElementById('item').value;
  // create li with the value
  let li = document.createElement('li');
  li.className = 'list-group-item';
  let textNode = document.createTextNode(newItem);
  li.appendChild(textNode);
  let btnDelete = document.createElement('button');
  btnDelete.className = 'btn btn-danger btn-sm float-right delete';
  let btnText = document.createTextNode('X');
  btnDelete.appendChild(btnText);
  li.appendChild(btnDelete);
  items.appendChild(li);

  // this works too...
  //let liHTML = `<li class="list-group-item">${newItem}<button class="btn btn-danger btn-sm float-right delete">X</button></li>`
  //items.innerHTML += liHTML;

  console.log(newItem, "added");
}

function removeItem(e) {
  e.preventDefault();
  if (e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
      let li = e.target.parentElement;
      items.removeChild(li);
      console.log("Item Delete");
    }

  }
}


function filterItems(e) {
  let text = e.target.value.toLowerCase();
  // get all li
  let liHTMLCollection = items.getElementsByTagName('li');
  Array.from(liHTMLCollection).forEach(li => li.firstChild.textContent.toLowerCase().indexOf(text) != -1 ? li.style.display = 'block' : li.style.display = 'none');
}
