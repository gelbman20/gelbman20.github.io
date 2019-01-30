var input = document.querySelector('#input-todo');
var button = document.querySelector('#btn-todo');

var todos = document.querySelector('#todos');
var Listtodos = document.querySelector('#list-todo');
var todosArr = [];

for (var i = 0; i < localStorage.length; i++) {
  todosArr.push(localStorage.key(i));
}

var newList = todosArr.map(item => '<li>' + item + '</li>').join('');

Listtodos.innerHTML = newList;


todos.addEventListener('click', function (event) {
  if (event.target === button && input.value !== '') {
    var text = input.value;
    var li = document.createElement('li');
    localStorage.setItem(text, text);
    li.innerHTML = localStorage.getItem(text);
    Listtodos.appendChild(li);
    input.value = '';
  }
});


input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    button.click();
  }
});