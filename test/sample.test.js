// FILE: sample.test.js

// TODO: Challenge
const chai = require('chai');
const sinon = require('sinon');
// const assert = require('assert');
const should = chai.should();

function greaterThanFive(num) {
	if (num > 5) return true;
	return false;
}

function divideByZero(num) {
	return num / 0
}

describe('Example Sinon Stub', () => {
	it('should pass', (done) => {
		const greaterThanFive = sinon.stub().returns('something');
		greaterThanFive(0).should.eql('something');
		greaterThanFive(0).should.not.eql(false);
		done();
	});
	it('is a large number', (done => {
		const bool = greaterThanFive(1000000);
		bool.should.eql(true);
		done();
	}))
});

describe('Divide By Zero', () => {
	it('should break', (done) => {
		const divideByZero = sinon.stub().returns(1 / 0);
		divideByZero.should.not.eql(1);
		done();
	})
})