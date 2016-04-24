var expect = require('chai').expect;

describe('random-age: ', function () {

  var randomAge = require('../../');

  it('common', function () {
    expect(randomAge()).to.be.within(18, 65);
    expect(randomAge('child')).to.be.within(1, 18);
  });
});
