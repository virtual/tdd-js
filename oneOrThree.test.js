var chai = require('chai');
chai.should(); // call function inside library
var assert = chai.assert;
var expect = chai.expect;

//Write a JavaScript program to test if an array of integers of length 2 contains 1 or a 3
var oneOrThree = function (arr) {
  return ( (arr.length === 2) && 
    (arr.indexOf(1) !== -1 ||  arr.indexOf(3) !== -1)
  );
}
describe("oneOrThreeFunction", function () {
  it('returns a boolean', function () {
    var val = oneOrThree([]);
    expect(val).to.be.a('boolean');
  });

  it('checks if array length is two', function () {
    var val = oneOrThree([2, 3]);
    expect(val).to.equal(true);
  });

  it('val equals one or three', function () {
    var val = oneOrThree([1, 3, 7]);
    expect(val).to.equal(false);
  });

  // if index 0 is 1
  // if index 1 is 1
  // if index 0 is 3
  // if index 1 is 3
});
