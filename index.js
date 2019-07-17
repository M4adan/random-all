'use strict'
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
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

Random.prototype.init = function (min,max) {
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
    if(self._min !== min || self._givenMax!==max){
        self._arr = []
        for (let i = min; i <= max; i++) {
            self._arr[self._arr.length] = i;
        }
        self._max = self._arr.length-1
        self._givenMax = max;
        self._min = min
    }
}

Random.prototype.getUnique = function (min,max) {
    let self = this;
    self.init(min,max)
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
}

Random.prototype.getInt = function (min,max) {
    if(isEmpty(min)){
        min = 1;
    }
    if(isEmpty(max)){
        max = min + 99;
    }
    if(min>max){
        let temp = min;
        min = max;
        max = temp;
    }
    return getRandomIntInclusive(min,max);
}

Random.prototype.getFloat = function (min,max) {
    if(isEmpty(min)){
        min = 1;
    }
    if(isEmpty(max)){
        max = min + 99;
    }
    if(min>max){
        let temp = min;
        min = max;
        max = temp;
    }
    min = min;
    max = max;
    return ((Math.random() * (max - min + 1)) + min)
}

module.exports = new Random();

// for (var i = 0; i < 10; i++) {
//     console.log(i+1,module.exports.getFloat(0,0));
=======
'use strict'
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
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

Random.prototype.init = function (min,max) {
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
    if(self._min !== min || self._givenMax!==max){
        self._arr = []
        for (let i = min; i <= max; i++) {
            self._arr[self._arr.length] = i;
        }
        self._max = self._arr.length-1
        self._givenMax = max;
        self._min = min
    }
}

Random.prototype.getUnique = function (min,max) {
    let self = this;
    self.init(min,max)
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
}

Random.prototype.getInt = function (min,max) {
    if(isEmpty(min)){
        min = 1;
    }
    if(isEmpty(max)){
        max = min + 99;
    }
    if(min>max){
        let temp = min;
        min = max;
        max = temp;
    }
    return getRandomIntInclusive(min,max);
}

Random.prototype.getFloat = function (min,max) {
    if(isEmpty(min)){
        min = 1;
    }
    if(isEmpty(max)){
        max = min + 99;
    }
    if(min>max){
        let temp = min;
        min = max;
        max = temp;
    }
    min = min;
    max = max;
    return ((Math.random() * (max - min + 1)) + min)
}

module.exports = new Random();

// for (var i = 0; i < 10; i++) {
//     console.log(i+1,module.exports.getFloat(0,0));
// }