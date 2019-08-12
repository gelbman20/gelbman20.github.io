const input = document.querySelector('#input');
const button = document.querySelector('#btn');

const todos = document.querySelector('#todos');
const list = document.querySelector('#list');

let todosArr = [{
    id: 0,
    desc: 'drink water'
  },
  {
    id: 1,
    desc: 'call 4 taxi'
  }
];

// Functions
let createItem = (arr, desc) => {
  let emptyObject = {};
  emptyObject.desc = desc;

  if (arr.length === 0) {
    emptyObject.id = 0;
    return emptyObject;
  }

  emptyObject.id = arr[arr.length - 1].id + 1;
  return emptyObject;
};

let clearInput = (input) => input.value = '';

let getId = (item) => item.getAttribute('id');


let refreshList = (arr) => {
  let counter = 0;
  let newArr = arr.map(function (item) {
    let renderObject = {};
    renderObject.id = counter++;
    renderObject.desc = item.desc;
    return renderObject;
  });
  arr = newArr.map(item => item);
  return arr;
};

let displayList = (arr, list) => {
  list.innerHTML = arr
                    .map(item => `<li>${item.desc} <a href="" id="${item.id}">X</a></li>`)
                    .join('')
};

let displayTest = () => {
  let test = document.querySelector('#test');
  test.innerHTML = JSON.stringify(todosArr, null, 2);
};

// Start
displayList(todosArr, list);
displayTest();

todos.addEventListener('click', function (event) {
  if (event.target === button && input.value === '') {
    input.classList.add('error')
  }

  if (event.target === button && input.value !== '') {
    input.classList.remove('error');
    var inputValue = input.value;
    todosArr.push(createItem(todosArr, inputValue));
    clearInput(input);

    displayList(todosArr, list);
    displayTest();
  }

  if (event.target.innerHTML === 'X') {
    event.preventDefault();
    let current = event.target;

    todosArr.splice(getId(current), 1);
    todosArr = refreshList(todosArr);

    displayList(todosArr, list);
    displayTest();
  }
});


input.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    button.click();
  }
});