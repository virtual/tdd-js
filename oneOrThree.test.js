var chai = require('chai');
chai.should(); // call function inside library
var assert = chai.assert;
var expect = chai.expect;

//Write a JavaScript program to test if an array of integers of length 2 contains 1 or a 3
var oneOrThree = function (arr) {
  return arr;
}
describe("oneOrThreeFunction", function () {
  it('is returning array', function () {
    var val = oneOrThree([]);
    val.should.be.a('array');
  });

  it('has two elements', function () {
    var val = oneOrThree([2, 3]);
    assert.lengthOf(val, 2);
  });

  it('val equals one or three', function () {
    var val = oneOrThree([1, 3, 7]);
    expect(val).to.equal(false);
  });
});
