process.env.NODE_ENV = 'test';

const chai = require('chai');
const helpers = require('../helpers');

chai.should();


describe('helpers.js', () => {
  it('add()', () => {
    helpers.add(1, 2).should.eql(3);
  });
  it('addAsync()', () => {
    helpers.addAsync(1, 2, (sum) => {
      sum.should.eql(3);
    });
  });
});
