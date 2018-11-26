'use strict';

function setRandom() {
  return parseInt(Math.random() * 100);
}

let buttonsCompare = document.getElementById('btn_compare'),
  formInputs = document.getElementsByClassName('form-input');

var inputNumberOne = document.getElementById('number_one'),
  inputNumberTwo = document.getElementById('number_two');

buttonsCompare.onclick = function () {
  inputNumberOne = document.getElementById('number_one');
  inputNumberTwo = document.getElementById('number_two');

  var result = inputNumberOne.value >= inputNumberTwo.value ? inputNumberOne.value : inputNumberTwo.value;
  document.getElementById('result_numbers').value = result;

  inputNumberOne.value = setRandom();
  inputNumberTwo.value = setRandom();
};

//
//=========================

let buttonApartment = document.getElementById('btn_apartment');

buttonApartment.onclick = function () {
  let inputApartmentNumber = document.getElementById('apartment_number'),
    inputApartmentNumberValue = inputApartmentNumber.value;

  let inputNumberResult =  document.getElementById('result_apartment_number');
  inputNumberResult.value = validateRoom(inputApartmentNumberValue);
};

function validateRoom(value) {

  value = parseInt(value);

  if (value < 1 || value > 90 || isNaN(value)) {
    return 'Enter valid number: 1 - 90'
  }

  if (value <= 20 ) { return '1 Floor'; }
  if (value <= 48 ) { return '2 Floor'; }
  if (value <= 90 ) { return '3 Floor'; }

  return value;
}


