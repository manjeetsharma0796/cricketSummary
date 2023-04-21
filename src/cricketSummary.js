const summary = function(overs) { 
  return overs.map(function(over) {
    return over.reduce(function(tally, ball){

      if(tally[ball] !== undefined) {
        tally[ball] += 1;
      }

      if(ball !== "NB" && ball !== "WD" && ball !== "W") {
        tally.total += ball;
      }

      tally.total += tally.WD + tally.NB;
      tally.extras = tally.WD + tally.NB;

      return tally;
    },{total: 0, 4: 0, 6: 0, W: 0, WD: 0, NB: 0, extras: 0})
  })
};

exports.summary = summary;
