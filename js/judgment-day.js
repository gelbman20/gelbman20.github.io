function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

  // true - высоксный год
  // false - не высоксный год
}

function getJudgmentDayOfCurrentYear(year) {

  var newYear = startYear;

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

  var newDayCode = counter % weak.length;

  if (isLeapYear(year)) {
    newYear['Январь'][31] = weak[newDayCode];

    newYear['Февраль'][28] = '';
    newYear['Февраль'][29] = weak[newDayCode];
  } else {
    newYear['Январь'][31] = weak[newDayCode];
    newYear['Февраль'][28] = weak[newDayCode];
  }
}

var weak = [
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
  'Понедельник',
  'Вторник',

];

var startYear = {
  'Январь': {
    0: 31,
    1: '',
    31: 'Среда'
  },
  'Февраль': {
    0: 28,
    1: '',
    28: 'Среда'
  },
  'Март': {
    0: 31,
    1: '',
    31: ''
  },
  'Апрель': {
    0: 30,
    1: '',
    30: ''
  },
  'Май': {
    0: 31,
    1: '',
    31: ''
  },
  'Июнь': {
    0: 30,
    1: '',
    30: ''
  },
  'Июль': {
    0: 31,
    1: '',
    31: ''
  },
  'Август': {
    0: 31,
    1: '',
    31: ''
  },
  'Сентябрь': {
    0: 30,
    1: '',
    30: ''
  },
  'Октябрь': {
    0: 31,
    1: '',
    31: ''
  },
  'Ноябрь': {
    0: 30,
    1: '',
    30: ''
  },
  'Декабрь': {
    0: 31,
    1: '',
    31: ''
  },
};

var month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];



// // Плсдений элимент
// var lastItemMonth = weak.indexOf( startYear.Февраль[ startYear.Февраль['0'] ] );
//
// for (var i = startYear.Март["0"]; i >= 1; i--) {
//   startYear.Март[i] = weak[ (i + lastItemMonth)  % weak.length ];
// }
//
// // Плсдений элимент
// var lastItemMonth = weak.indexOf( startYear.Март[ startYear.Март['0'] ] );
//
// for (var i = startYear.Апрель["0"]; i >= 1; i--) {
//   startYear.Апрель[i] = weak[ (i + lastItemMonth)  % weak.length ];
// }


getJudgmentDayOfCurrentYear(2018);

month.forEach(function (item, j, array) {

  if (j === 1) {

    var lastItemMonth = weak.indexOf(startYear[item][startYear[item]['0']]);

    for (var i = startYear[item]["0"]; i >= 1; i--) {
      startYear[item][i] = weak[(i + lastItemMonth) % weak.length];
    }

  } else if (j > 1) {

    lastItemMonth = weak.indexOf(startYear[ array[ j - 1 ] ][startYear[array[ j - 1] ]['0']]);

    for (var i = startYear[item]["0"]; i >= 1; i--) {
      startYear[item][i] = weak[(i + lastItemMonth) % weak.length];
    }

  }

  console.log(item, startYear[item]);
});














