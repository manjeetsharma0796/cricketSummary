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

  let fours = summary([[4]])[0][4];

  it("Should give one as four's as only one 4 is given in an over", {
    actual: fours === 1,
    expected: true 
  });

};

const test = function() {
  testCricketSummary();
  displaySummary();
};

test();
