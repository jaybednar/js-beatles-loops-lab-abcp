function theBeatlesPlay(musicians, instruments) {
  
  for (var i = 0; i < musicians.length && i < instruments.length; i++) {
    let musicians1 = musicians[i];
    let instruments1 = instruments[i];
    [...musiciansInstruments,`${musicians1} plays ${instruments1}`]
  }
  return musiciansInstruments;
}