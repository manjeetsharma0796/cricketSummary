const one = {valid: 1, four: 0, six: 0, runs: 1, wicket: 0, wide: 0, noBalls: 0, extra: 0 }
const two = {valid: 1, four: 0, six: 0, runs: 2, wicket: 0, wide: 0, noBalls: 0, extra: 0 }
const three = {valid: 1, four: 0, six: 0, runs: 3, wicket: 0, wide: 0, noBalls: 0, extra: 0 }
const four = {valid: 1, four: 1, six: 0, runs: 4, wicket: 0, wide: 0, noBalls: 0, extra: 0 }
const five = {valid: 1, four: 0, six: 0, runs: 5, wicket: 0, wide: 0, noBalls: 0, extra: 0 }
const six = {valid: 1, four: 0, six: 1, runs: 6, wicket: 0, wide: 0, noBalls: 0, extra: 0 }
const wide = {valid: 0, four: 0, six: 0, runs: 1, wicket: 0, wide: 1, noBalls: 0, extra: 1 }
const wicket = {valid: 0, four: 0, six: 0, runs: 0, wicket: 1, wide: 0, noBalls: 0, extra: 0 }
const noBall = {valid: 0, four: 0, six: 0, runs: 1, wicket: 0, wide: 0, noBalls: 1, extra: 1 }

const contributionValue = {
  4: four,
  6: six,
  1: one,
  2: two,
  3: three,
  5: five,
  WD: wide,
  W: wicket,
  NB: noBall
}

const updateScore = function(tally, delivery) {

  tally.total += contributionValue[delivery].runs;
  tally.fours += contributionValue[delivery].four;
  tally.sixes += contributionValue[delivery].six;
  tally.wides += contributionValue[delivery].wide;
  tally.wickets += contributionValue[delivery].wicket;
  tally.extras += contributionValue[delivery].extra;
  tally.noBalls += contributionValue[delivery].noBalls;

  return tally;
};

const summary = function(overs) { 
  const innings = overs.flatMap(function(over) {
    return over;
  });
  const tally = {total: 0, fours : 0, sixes: 0, wickets: 0, wides: 0, noBalls: 0, extras: 0};

  return innings.reduce(updateScore, tally); 
};

exports.summary = summary;
