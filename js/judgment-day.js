// Проверка, высокосный год или нет
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

  // true - высоксный год
  // false - не высоксный год
}

// Узнать смещение дней от судного дня 2018
function getConfusionDay(year) {
  if (year < 2018) {
    return 'Нужен год больше или равный 2018 ))'
  }

  // Разница годов, что бы узнать на сколько сместить
  // Судный день (узнать день 28 или 29 Февраля)
  var differenceOfYers = year - 2018;
  var countYear = 2018;

  // Счетчик от которого будем отталкиваться
  var counter = 0;

  // Цикл в котором узнаем смешенние даты
  for (var i = 0; i < differenceOfYers; i++) {
    countYear++;
    if (isLeapYear(countYear)) {
      counter = counter + 2;
    } else {
      counter = counter + 1;
    }
  }

  return counter;
}

// Заполняем днями Февраль
function setFebruary(year) {
  var weakCount;
  var confusionDay = getConfusionDay(year);
  confusionDay = confusionDay % 7;
  var currentDay = '';

  if (isLeapYear(year)) {
    yearDefault[1][28] = weak[ (2 + confusionDay) % 7 ];
    weakCount = weak.indexOf( yearDefault[1][28] );
  } else {
    yearDefault[1][27] = weak[ (2 + confusionDay) % 7 ];
    weakCount = weak.indexOf( yearDefault[1][27] );
  }

  for (var i = yearDefault[1].length - 1; i >= 0; i--) {

    yearDefault[1][i] = weak[weakCount];

    --weakCount;
    if (weakCount < 0) {
      weakCount = 6;
    }
  }
}

// Заполняем днями Январь
function setJanuary() {
  var lastDayAfterMoth = yearDefault[1][0];
  weakCount = weak.indexOf(lastDayAfterMoth);
  for (var i = yearDefault[0].length - 1; i >= 0; i--) {
    --weakCount;

    if (weakCount < 0) {
      weakCount = 6;
    }

    yearDefault[0][i] = weak[weakCount];
  }
}

// Заполняем все остольные месяца
function setOtherMnth () {
  for (var i = 2; i < 12; i++) {
    var lastDayBeforeMonth = yearDefault[i-1][yearDefault[i-1].length - 1];
    weakCount = weak.indexOf(lastDayBeforeMonth);

    if (weakCount === 6) {
      weakCount = 0;
    } else {
      ++weakCount;
    }

    for (var j = 0; j < yearDefault[i].length; j++) {

      yearDefault[i][j] = weak[weakCount];

      weakCount++;
      if (weakCount > 6) {
        weakCount = 0;
      }
    }
  }
}

var startYear = 2018;

var weak = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье'
];

var yearDefault = [
  [], // 0 Январь - 31
  [], // 1 Феварль - 28,29
  [], // 2 Март - 31
  [], // 3 Апрель - 30
  [], // 4 Май - 31
  [], // 5 Июнь - 30
  [], // 6 Июль - 31
  [], // 7 Август - 31
  [], // 8 Сентябрь - 30
  [], // 9 Октябрь - 31
  [], // 10 Ноябрь - 30
  [], // 11 Декабрь - 31
];

var monthDefault= [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь'
];

yearDefault[0][30] = ''; // Январь
yearDefault[2][30] = ''; // Март
yearDefault[3][29] = ''; // Апрель
yearDefault[4][30] = ''; // Май
yearDefault[5][29] = ''; // Июнь
yearDefault[6][30] = ''; // Июль
yearDefault[7][30] = ''; // Август
yearDefault[8][29] = ''; // Сентябрь
yearDefault[9][30] = ''; // Октябрь
yearDefault[10][29] = ''; // Ноябрь
yearDefault[11][30] = ''; // Декабрь

// Получить день недели
function getDay(day, month, year) {
  setFebruary(year);
  setJanuary();
  setOtherMnth();


  var result = yearDefault[month - 1][day - 1];

  if (result === undefined) {
    return false;
  }

  return result;
}

/*
* Типа UI (стыд, позор О_о)
*/
var button = document.getElementById('btn');

button.onclick = function () {

  document.getElementById('answer').innerHTML = '';

  var day = document.getElementById('day').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('year').value;
  var leapYear = isLeapYear(year);

  if (year < 2018) {
    alert( 'Нужен год больше 2018 ' );
    return false;
  }

  if ( leapYear === false && month == 2 && day > 28 ) {
    alert( ' Это не высокосный год, тут 28 дней в Феврале ' );
    return false;
  }

  if (month == 1 && day > 31 || month == 3 && day > 31 || month == 5 && day > 31 || month == 7 && day > 31 || month == 8 && day > 31 || month == 10 && day > 31 || month == 12 && day > 31) {
    alert(' В этом месяце не больше 31 дня ');
    return false;
  }

  if (month == 4 && day > 30 || month == 6 && day > 30 || month == 9 && day > 30 || month == 11 && day > 30) {
    alert(' В этом месяце не больше 30 дней ');
    return false;
  }

  var currentDay = getDay(day, month, year);

  if (!currentDay) {
    currentDay = 'Ошибка вычисления, попробуйте ввести другие данные';
  }

  document.getElementById('answer').innerHTML = '<p>' + day + ' ' +  monthDefault[month - 1] + ' ' + year  +  ' года это - ' +  currentDay + '</p>' +
    '<p>' +  'Судный день:  ' + yearDefault[1][ yearDefault[1].length - 1 ]  +'</p>';

  // Очишаем от 29 числа, все равно будем заного генерить все
  yearDefault[1].pop();
};
