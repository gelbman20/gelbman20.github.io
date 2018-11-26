function isRightTriangle(len1, len2, len3) {
  let array = [len1, len2, len3].sort(function (a, b) {
      return a - b;
    }),
    result = 0;

  for (let i = 0; i < array.length - 1; i++) {
    result +=  Math.pow(array[i], 2);
  }

  if (result === Math.pow(array[array.length - 1], 2)) {
    return true;
  }

  return false;
}

document.querySelectorAll('div').forEach(div => {
  var lengths = div.innerHTML.split(', ').map(_=>+_);
  var isRight = div.dataset.right === 'true';
  if (isRightTriangle.apply(null, lengths) === isRight) {
    div.classList.add('ok');
  } else {
    div.classList.add('err');
  }
})

/*
* Leap Year
*/

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}














































document.querySelectorAll('div').forEach(div => {

  var year = +div.innerHTML;
  var isLeap = div.dataset.leap === 'true';
  if (isLeapYear(year) === isLeap) {
    div.classList.add('ok');
  } else {
    div.classList.add('err');
  }
})

