"use strict";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function isEmpty(value) {
    if(value==undefined || value ==null){
        return true
    }
    return false
}


var Random = function () {
	this.init(1,100)
}

Random.prototype.init = function(min,max,force) {
	let self = this;

    if(isEmpty(min) || isEmpty(max)){
        min=1;
        max = 100;
    }
    if(min>max){
        let temp = min;
        min = max;
        max = temp;
    }
    if(self._min !== min || self._givenMax!==max || force){
        self._arr = []
        for (let i = min; i <= max; i++) {
            self._arr[self._arr.length] = i;
        }
        self._max = self._arr.length-1
        self._givenMax = max;
        self._min = min
    }
};

Random.prototype.getUnique = function(min,max,force) {
	let self = this;
    self.init(min,max,force)
    let ran = getRandomIntInclusive(0,self._max)
    let temp = self._arr[self._max];
    self._arr[self._max] =self._arr[ran];
    self._arr[ran] = temp;
    let toSend = self._arr[self._max];
    --self._max;
    if(self._max < 0){
            self._max = self._arr.length - 1;
    }
    return toSend;
};

module.exports = Random;