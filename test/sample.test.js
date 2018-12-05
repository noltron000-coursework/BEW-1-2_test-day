// FILE: sample.test.js

// TODO: Challenge
const sinon = require('sinon');
const chai = require('chai');
const mocha = require('mocha');
const assert = require('assert');


function greaterThanFive(num) {
	if (num > 5) return true;
	return false;
}

describe('Example Sinon Stub', () => {
	it('should pass', (done) => {
		const greaterThanFive = sinon.stub().returns('something');
		greaterThanFive(0).should.eql('something');
		greaterThanFive(0).should.not.eql(false);
		done();
	});
});
