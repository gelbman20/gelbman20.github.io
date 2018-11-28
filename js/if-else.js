'use strict';

function setRandom() {
  return parseInt(Math.random() * 100);
}

var buttonsCompare = document.getElementById('btn-compare');
var inputNumberOne = document.getElementById('number-one');
var inputNumberTwo = document.getElementById('number-two');

buttonsCompare.onclick = function () {
  var resultInput = document.getElementById('result-numbers');
  inputNumberOne = document.getElementById('number-one');
  inputNumberTwo = document.getElementById('number-two');

  var result = inputNumberOne.value >= inputNumberTwo.value ? parseInt( inputNumberOne.value ) : parseInt( inputNumberTwo.value );

  if (result === '' || isNaN(result)) {
    resultInput.value = 'Введите повторно Число';
  } else {
    resultInput.value = result;
  }


};

//
//=========================

var buttonApartment = document.getElementById('btn-apartment');

buttonApartment.onclick = function () {
  var inputApartmentNumber = document.getElementById('apartment-number');
  var inputApartmentNumberValue = inputApartmentNumber.value;

  var inputNumberResult = document.getElementById('result-apartment-number');
  inputNumberResult.value = validateRoom(inputApartmentNumberValue);
};

function validateRoom(value) {

  value = parseInt(value);

  if (value < 1 || value > 90 || isNaN(value)) {
    return 'Введите номер квартиры от 1 до 90 включительно'
  }

  if (value <= 20) {
    return '1';
  }
  if (value <= 48) {
    return '2';
  }
  if (value <= 90) {
    return '3';
  }

  return value;
}


