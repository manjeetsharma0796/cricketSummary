const summary = function(overs) { 
  const innings = overs.flatMap(function(over) {return over;})

  return innings.reduce(function(tally, ball){

    if(tally[ball] !== undefined) {
      tally[ball] += 1;
    }

    if(ball !== "NB" && ball !== "WD" && ball !== "W") {
      tally.total += ball;
    }

    tally.extras = tally.WD + tally.NB;
    tally.total += tally.extras;

    return tally;
  },{total: 0, 4: 0, 6: 0, W: 0, WD: 0, NB: 0, extras: 0})
};

exports.summary = summary;
