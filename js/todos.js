var input = document.querySelector('#input');
var button = document.querySelector('#btn');

var todos = document.querySelector('#todos');
var list = document.querySelector('#list');
var todosArr = [
  { id: 0, desc: 'drink water' },
  { id: 1, desc: 'call 4 taxi' }
];

function createItem(arr, desc) {
  var newObject = {};
  newObject.id = arr[arr.length - 1].id + 1;
  newObject.desc = desc;
  return newObject;
}

function clearInput(input) {
  input.value = '';
}

function getId(item) {
  var id = item.getAttribute('id');
  return id;
}

function refreshList(arr) {
  var counter = 0;
  var newArr = arr.map(function (item) {
    var renderObject = {};
    renderObject.id = counter++;
    renderObject.desc = item.desc;
    return renderObject;
  });
  arr = newArr.map(item => item);
  return arr;
}

function displayList(arr, list) {
  list.innerHTML = arr.map(item => '<li>' + item.desc + ' <a href="" ' + 'id=' + item.id + ' >X</a>' + '</li>').join('')
}

// Test
function displayTest() {
  var test = document.querySelector('#test');
  test.innerHTML = JSON.stringify(todosArr, null, 2);;
}

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

    todosArr.push( createItem(todosArr, inputValue) );
    clearInput(input);

    displayList(todosArr, list);
    displayTest();
  }

  if (event.target.innerHTML === 'X') {
    event.preventDefault();
    var current = event.target;

    todosArr.splice( getId(current), 1 );
    todosArr = refreshList(todosArr);

    displayList(todosArr, list);
    displayTest();
  }
});


input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    button.click();
  }
});