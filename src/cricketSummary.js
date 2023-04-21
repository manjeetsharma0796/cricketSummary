const updateScore = function(tally, delivery) {
  if(tally[delivery] !== undefined && typeof(delivery) !== "string") {
    tally[delivery] += 1;
  }

  if(typeof(delivery) !== "string") {
    tally.total += delivery;
  }

  if(delivery === "NB" || delivery === "WD") {
    tally[delivery] += 1;
    tally.total += 1;
  }

  if(delivery === "W") {
    tally[delivery] += 1;
  }

  tally.extras = tally.WD + tally.NB;

  return tally;
};

const summary = function(overs) { 
  const innings = overs.flatMap(function(over) {return over;})
  const tally = {total: 0, 4: 0, 6: 0, W: 0, WD: 0, NB: 0, extras: 0};

  return innings.reduce(updateScore, tally); 
};

console.log(summary([[4, 6]]));

exports.summary = summary;
