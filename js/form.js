/*
 * Installment calculator
*/

function monthlyInterest(amount, percent) {
  return amount / 100 * percent;
}

function monthlyBody(amount, months) {
  return (amount / months).toFixed(2) * 1;
}

function monthlyTotal(body, monthlyPercent) {
  return body + monthlyPercent;
}

function totalAmount(amount, monthlyInterest, month) {
  return amount + monthlyInterest * month;
}

function totalOverpayment(totalAmount, amount) {
  return totalAmount - amount;
}


function setCalculate() {
  var amount = document.getElementById( 'input-amount' );
  var months = document.getElementById( 'select-number-payments' );
  var percent = 1.9;

  var amountValue = amount.value * 1;
  var monthsValue = months.value * 1;

  var monthBody = monthlyBody ( amountValue, monthsValue );
  var monthPercent = monthlyInterest( amountValue, percent );
  var monthTotal = monthlyTotal( monthBody,  monthPercent );
  var totalSum = totalAmount( amountValue, monthPercent, monthsValue );
  var thisTotalOverpayment = totalOverpayment( totalSum, amountValue );

  var htmlMonthBody = document.getElementById( 'month-body' );
  var htmlMonthPercent = document.getElementById( 'month-interest' );
  var htmlMonthTotal = document.getElementById( 'month-total' );
  var htmlTotalSum = document.getElementById( 'total-amount' );
  var htmlTotalOverpayment = document.getElementById( 'total-overpayment' );

  htmlMonthTotal.innerHTML = monthTotal;
  htmlMonthBody.innerHTML = monthBody;
  htmlMonthPercent.innerHTML = monthPercent;
  htmlTotalSum.innerHTML = totalSum;
  htmlTotalOverpayment.innerHTML = thisTotalOverpayment;

  var result = '';

  for (var i = 3; i <= 24; i++) {
    result = result + '<tr>' +
      '<td>' + amountValue  + '</td>' +
      '<td>' + i  + '</td>' +
      '<td>' + monthlyBody( amountValue, i )  + '</td>' +
      '<td>' + monthlyInterest( amountValue, percent )  + '</td>' +
      '<td>' + monthlyTotal(monthlyBody( amountValue, i ), monthlyInterest( amountValue, percent ) )  + '</td>' +
      '<td>' + totalAmount( amountValue, monthlyInterest( amountValue, percent ),  i )  + '</td>' +
      '<td>' + totalOverpayment(totalAmount( amountValue, monthlyInterest( amountValue, percent ),  i ), amountValue )  + '</td>' +
      '</tr>'
  }

  var tableHTML = document.getElementById( 'tbody' );

  tableHTML.innerHTML = result;
}
