let musiciansInstruments = {};

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length && i < instruments.length; i++) {
    [...musiciansInstruments,`${musicians[i]} plays ${instruments[i]}`]
  }
  return musiciansInstruments;
}