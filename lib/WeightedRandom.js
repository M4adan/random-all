"use strict";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

var Random = function () {
	let self = this;
	self._items = null;
	self._probability = null;
}

Random.prototype.setItems = function (items,probability){
    let self = this;
    if(typeof(items) === "object"){
        let initProbabilty = function () {
            probability = [];
            for (let i = 0; i < items.length; i++) {
                probability[probability.length] = Math.round(100/items.length);
            }
        }
        if(typeof(probability) !== "object"){
           initProbabilty();
        }
        if(probability.length<=0){
            initProbabilty();
        }
        self._items = items;
        self._probability = probability;
        return true
    }
    return false;
}

Random.prototype.getItem = function (){
    let self = this;
    if(!self._items){
        return undefined;
    }
    let val = getRandomIntInclusive(1,100);
    for (let i = 0; i < self._probability.length; i++) {
       val = val - self._probability[i]
        if(val<=0){
            return self._items[i];
        }
    }
}

module.exports = Random;