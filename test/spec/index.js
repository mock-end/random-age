var expect = require('chai').expect;

describe('random-age: ', function () {

  var randomAge = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {
      expect(randomAge()).to.be.within(1, 120);
      expect(randomAge('child')).to.be.within(1, 18);
    }
  });
});
