const { describe, it } = require('mocha');
const { expect } = require('chai');
const getPaymentTokenApi = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('tests that correct result is gotten if success value is true', (done) => {
    getPaymentTokenApi(true).then((data) => {
      expect(data).to.deep.equal({data: 'Successful response from the API' });
      done();
    }).catch((err) => {
      done(err);
    });
  });

  it('checks that nothing is returned if success value is false', (done) => {
    expect(getPaymentTokenApi(false)).to.be.undefined;
    done();
  });
});
