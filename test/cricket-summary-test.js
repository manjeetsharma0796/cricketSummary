const cricket = require("../src/cricketSummary.js"); const testLibrary = require("../lib/testing.js");
const displayHeadline = testLibrary.displayHeadline;
const assertEquals = testLibrary.assertEquals;
const assertArray = testLibrary.assertArray;
const assertNestedArray = testLibrary.assertNestedArray;
const areArraysEqual = testLibrary.areArraysEqual;
const displaySummary = testLibrary.displaySummary;
const summary = cricket.summary;

const testCricketSummary = function() {
  const it = function(testName, testData) {
    assertEquals(testData.actual, testData.expected, testName);
  };

  displayHeadline("testCricketSummary");

  let countOfFour = summary([[4]]).fours;

  it("Should give one as four's as only one 4 is given in an over", {
    actual: countOfFour === 1,
    expected: true 
  });

  countOfFour = summary([[4, 6], [6, 4]]).fours;
  let countOfSixes = summary([[4, 6], [6, 4]]).sixes;
  it("Should give 2 sixes as two sixes are there in over ", {
    actual: countOfSixes === 2,
    expected: true 
  });

};

const test = function() {
  testCricketSummary();
  displaySummary();
};

test();
