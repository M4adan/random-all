var assert = require('assert');
var chai = require("chai")
var expect = chai.expect;
var random = require("../index.js")
describe('Random', function() {
    describe('#getUnique()', function() {

        it('random.getUnique() should return random unique value when between 1 and 100', function() {
            expect(random.getUnique()).to.be.gte(1);
            expect(random.getUnique()).to.be.lte(100);
        });

        it('random.getUnique(1,1) should return min value if min or max are the same', function() {
            expect(random.getUnique(1,1)).to.be.equal(1);
            expect(random.getUnique(5,5)).to.be.equal(5);
            expect(random.getUnique(100,100)).to.be.equal(100);
        });

        it('random.getUnique(2,1) should auto correct to random.getUnique(1,2)', function() {
            expect(random.getUnique(2,1)).to.be.within(1,2);
        });

        it('later calling `random.getUnique()` will return value b/w 1 and 100',function() {
       		expect(random.getUnique()).to.be.lte(100);
        });

        it('random.getUnique(0,9) should return unique values from 0 to 9 and repeat', function() {
            
        	let arr = [];
            for (let i = 0; i < 10; i++) {
            	let ran = random.getUnique(0,9)
            	expect(arr).to.not.contain(ran);
            	arr[arr.length] = ran;
            }
            for (let i = 0; i < 10; i++) {
            	let ran = random.getUnique(0,9)
            	expect(arr).to.contain(ran);
            }
        });
        it.skip('random.getUnique(0,1000000) should return unique values from 0 to 1000000 and repeat', function() {
            this.timeout(0);
            let objs = {};
            for (let i = 0; i <= 1000000; i++) {
                objs[i] = false;
            }
            for (let i = 0; i < 1000000; i++) {
                let ran = random.getUnique(0,1000000)
                expect(objs[ran]).to.be.false;
                objs[ran] = true;
            }
            this.timeout(2000);
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

        it('random.getFloat(1,8,4) should have 4 values after decimal point.', function() {
           let j = 0
           for (var i = 1; i < 50; i++) {
                ++j
                if(j>14){
                    j = 1
                }
                expect(random.getFloat(1,8,j).toString()).to.have.length(j+2);
           }
        });
    });

    describe('#getBoolean()', function() {
        it('getBoolean() should return boolean', function() {
           expect(random.getBoolean()).to.be.a("boolean");
        });

        it('getBoolean(40) should return 40% true and 60% false', function() {
            let tr = 0,
            fl = 0;
            for (var i = 0; i < 1000; i++) {
               if(random.getBoolean(40)){
                    ++tr
                    continue;
               }
               ++fl
            }
            expect((tr/1000)*100).to.be.within(35,45);
            expect((fl/1000)*100).to.be.within(55,65);
        });
    });

    describe('#getChar()', function() {
        it('getChar() should return a char', function() {
           expect(random.getChar()).to.be.a("string");
           expect(random.getChar().length).to.be.equal(1);
        });

        it("getChar('abc') should return a char from a,b,c", function() {
           for (var i = 0; i < 50; i++) {
               expect(["a","b","c"]).to.contain(random.getChar("abc"))
           }
        });

        it("getChar('a') should return a", function() {
           for (var i = 0; i < 50; i++) {
               expect(random.getChar("a")).to.equal("a")
           }
        });
        
        it('getChar("abc") should return unique char first 3 times and later repeat', function() {
            let arr = [];
            for (var i = 0; i < 3; i++) {
                let ran = random.getChar("abc",true)
                expect(arr).to.not.contain(ran);
                arr[arr.length] = ran;
            }
            for (var i = 0; i < 3; i++) {
                let ran = random.getChar("abc",true)
                expect(arr).to.contain(ran);
            }
        });
    });

    describe('#choices()', function() {
        it('Calling choices() without calling setChoices return undefined', function() {
           expect(random.choices()).to.be.equal(undefined);
        });

        it('Calling setChoices([1,5]) without sending porbabilty should defaults to 50,50', function() {
           expect(random.setChoices([1,5])).to.be.true;
        });

        it('Calling choices([1,5]) should have 50% probabilty of 1 and 5', function() {
           let tr = 0,
            fl = 0;
            for (var i = 0; i < 1000; i++) {
               if(random.choices() == 1){
                    ++tr
                    continue;
               }
               ++fl
            }
            expect((tr/1000)*100).to.be.within(45,55);
            expect((fl/1000)*100).to.be.within(45,55);
        });

        it('Calling setChoices([1,5,8],[10,40,50]) should have 10,40,50 probabilty of 1,5,8 respectively', function() {
           random.setChoices([1,5,8],[10,40,50]);
            let a = {}
            for (let i = 0; i < 1000; i++) {
                let ran = random.choices()
                if(a[ran]){
                    ++a[ran];
                }else {
                    a[ran] = 1
                }
            }
            expect((a["1"]/1000)*100).to.be.within(5,15);
            expect((a["5"]/1000)*100).to.be.within(35,45);
            expect((a["8"]/1000)*100).to.be.within(45,55);
        });
    });

    describe('#new()', function() {
        it('Calling new() returns new object', function() {
            let obj1 = random.new();
            let obj2 = random.new();
            expect(obj1).to.be.not.equal(obj2)
        });

        it('getUnique function should have different value in each objects', function() {
            let obj1 = random.new();
            let obj2 = random.new();
            
            let objs = {};
            for (let i = 0; i < 10; i++) {
                objs[i] = false;
            }
            for (let i = 0; i < 8; i++) {
                let ran = obj1.getUnique(1,10)
                objs[ran] = true;
            }

            let count = 0;
            for (let i = 0; i < 10; i++) {
                let ran = obj2.getUnique(1,10)
                if(objs[ran]  === true){
                    ++count
                }
            }
            expect(count).to.be.equal(8);
        });

        
    });
});