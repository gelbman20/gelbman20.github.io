/*
 * Chessboard
*/

var chessboard = document.getElementById('chessboard');
var chessboardCol =  document.getElementsByClassName('chessboard-col');

function createChessboradMarking(number) {
  var chessboardMarking = '';

  for ( var i = 0; i < number; i++ ) {
    chessboardMarking += '<div class="chessboard-row">';

    for ( var j = 0; j < number; j++ ) {
      chessboardMarking += '<span class="chessboard-col"></span>'
    }

    chessboardMarking += '</div>'
  }

  return chessboardMarking;
}

function insertСhessboard(number) {

  chessboard.innerHTML = createChessboradMarking(number);

  for (var i = 0; i < chessboardCol.length; i++) {
    chessboardCol[i].style.height = chessboardCol[i].clientWidth + 'px';
  }

}

insertСhessboard(12);
