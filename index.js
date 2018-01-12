function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (var i = 0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empty;
}

function johnLennonFacts(array) {
  var i = 0;
  while (i < array.length) {
    array = array[i] + "!!!";
    i++;
  }
  return array;
}