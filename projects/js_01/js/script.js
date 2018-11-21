var documentString = document.getElementsByClassName('string');

function StringContactCustom(element) {
  var newString = '';

  for (var i = 0; i < element.length; i++) {
    newString = newString.concat(' ', element[i].innerHTML);
  }

  return newString;
}

function printFunction(func) {
  return func;
}

StringContactCustom(documentString);


