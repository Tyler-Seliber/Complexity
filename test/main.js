var chai    = require("chai");
var assert = chai.assert,
    expect = chai.expect;
var main = require("../analysis.js");

describe("Strings: ", function () {
  it("Strings in mystery.js is 19.", function () {
    main.complexity("mystery.js")
    let stringCount = main.getStrings("mystery.js");
    assert.equal(19, stringCount);
  });
});
