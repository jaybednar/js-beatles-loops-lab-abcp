function theBeatlesPlay(musicians, instruments) {
  let musiciansInstruments = {};
  let musicians1 = musicians[i];
  let instruments1 = instruments[i];
  for (var i = 0; i < musicians.length && i < instruments.length; i++) {
    musiciansInstruments.push(`${musicians1} plays ${instruments1}`);
  }
  return musiciansInstruments;
}