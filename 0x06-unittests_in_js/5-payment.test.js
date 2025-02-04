const sinon = require('sinon');
const { describe, it } = require('mocha');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('calls sendPaymentRequestToAPI and verifies that console logs right string and is called once', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('also verifies that the right string is logged on the console after sendPaymentRequestToAPI is called', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
