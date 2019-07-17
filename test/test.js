var assert = require('assert');
var chai = require("chai")
var expect = chai.expect;
var random = require("../index.js")
describe('Random', function() {
    describe('#getUnique()', function() {

        it('should return random unique value when between 1 and 100 if min or max are not given', function() {
            expect(random.getUnique()).to.be.gte(1);
            expect(random.getUnique()).to.be.lte(100);
        });
        it('should return min value if min or max are the same', function() {
            expect(random.getUnique(1,1)).to.be.equal(1);
            expect(random.getUnique(5,5)).to.be.equal(5);
            expect(random.getUnique(100,100)).to.be.equal(100);
        });
        it('when min and max is swapped it should auto correct', function() {
            expect(random.getUnique(2,1)).to.be.within(1,2);
        });
        it('later calling get with empty params will return value b/w 1 and 100',function() {
       		expect(random.getUnique()).to.be.lte(100);
        });
        it('should return unique values from 0 to 9 if min is 0 and max is 10 and repeat', function() {
        	let arr = [];
            for (var i = 0; i < 10; i++) {
            	let ran = random.getUnique(0,9)
            	expect(arr).to.not.contain(ran);
            	arr[arr.length] = ran;
            }
            for (var i = 0; i < 10; i++) {
            	let ran = random.getUnique(0,9)
            	expect(arr).to.contain(ran);
            }
        });
    });

    describe('#getInt()', function() {
        it('should return random value when between 1 and 100 if min or max are not given', function() {
            expect(random.getInt()).to.be.within(1,100);
        });
        it('should return random value when between 1 and 10 if min or max are 1 and 10 respectively.', function() {
            for (var i = 0; i < 10; i++) {
            	expect(random.getInt(1,10)).to.be.within(1,10);
            }
        });
        it('should return auto correct if min and max are swapped', function() {
           expect(random.getInt(10,1)).to.be.within(1,10);
        });
        it('should return auto correct if min and max are swapped', function() {
           expect(random.getInt(10,1)).to.be.within(1,10);
        });
        it('should max is not given then it should be within min+99', function() {
           expect(random.getInt(1)).to.be.within(1,100);
        });
        it('should min is not given then it should be 1,max', function() {
           expect(random.getInt(null,1)).to.be.within(1,1);
        });
    });

    describe('#getFloat()', function() {
        it('should return random value when between 1 and 100 if min or max are not given', function() {
            for (var i = 0; i < 100; i++) {
            	expect(random.getFloat()).to.be.within(1,101);
            }
        });
        it('should return random value when between 6 and 10 if min or max are 6 and 10 respectively.', function() {
            for (var i = 0; i < 10; i++) {
            	expect(random.getFloat(6,10)).to.be.within(6,11);
            }
        });
        it('should return auto correct if min and max are swapped', function() {
           expect(random.getFloat(10,1)).to.be.within(1,11);
        });
        it('should return auto correct if min and max are swapped', function() {
           expect(random.getFloat(20,10)).to.be.within(10,21);
        });
        it('should max is not given then it should be within min+99', function() {
           expect(random.getFloat(50)).to.be.within(50,50+100);
        });
        it('should min is not given then it should be 1,max', function() {
           expect(random.getFloat(null,1)).to.be.within(1,2);
        });
    });
});