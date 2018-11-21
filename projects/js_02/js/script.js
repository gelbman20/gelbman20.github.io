var input = document.getElementById('form-control'),
  button = document.getElementById('btn');

button.onclick = function () {
  var inputValue = parseInt(input.value, 0);
  inputValue > 0 && appendHtml(inputValue, 'больше нуля', 'color-primary')
  || inputValue < 0 && appendHtml(inputValue, 'меньше нуля', 'color-secondary')
  || inputValue === 0 && appendHtml(inputValue, 'равно нулю', 'color-accent')
  || isNaN(inputValue) && appendHtml(inputValue, 'это все потому что ты не ввел число бро')

  input.value = parseInt(Math.random() * (100 - -100) + -100, 0);

};

function appendHtml(value, massage, color) {
  var newP = document.createElement('span');
  newP.innerHTML = value + ' ' + massage;
  newP.className = (color);
  document.getElementById('result').appendChild(newP);
}