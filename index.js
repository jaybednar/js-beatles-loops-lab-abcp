let mI = [];

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length && i < instruments.length; i++) {
    [...mI,`${musicians[i]} plays ${instruments[i]}`]
  }
  return mI;
}