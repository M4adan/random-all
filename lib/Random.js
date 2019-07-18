'use strict';

var Weighted = require("./WeightedRandom.js");
var Unique = require("./UniqueRandom.js");

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
    this.setDefault()
    this.items = new Weighted();
    this.unique = new Unique();
    this.charUnique = new Unique();
    this.booleanItems = new Weighted();
    this.prevChance = -50;
    this.prevCharStr = null;
    this.defaultString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
}

Random.prototype.setDefault = function (params) {
    if(params && typeof(params) === 'object'){
        this.defaultString = params.defaultString || this.defaultString;
        this.dafaultItems = params.dafaultItems;
        if(!isEmpty(this.dafaultItems) && typeof(this.dafaultItems) === "object"){
            this.items.setItems(this.dafaultItems.items,this.dafaultItems.probabilty);
        }
    }
    
}

Random.prototype.getUnique = function (min,max) {
    return this.unique.getUnique(min,max);
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

Random.prototype.getFloat = function (min,max,fixed) {
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
    if(!isEmpty(fixed)){
        let val = (Math.random() * (max - min + 1)) + min
        val = Math.round(val * Math.pow(10,fixed))
        if(val%10==0){
            val = val + 1;
        }
        return val/Math.pow(10,fixed);
    }
    return ((Math.random() * (max - min + 1)) + min);
}


Random.prototype.getChar = function (str,unique) {
    str = str || this.defaultString
    let ran = getRandomIntInclusive(0,str.length-1);
    if(unique){
        this.prevCharStr  = str;
        ran = this.charUnique.getUnique(0,str.length-1,this.prevCharStr != str);
    }
    return str.substring(ran, ran+1)
}

Random.prototype.getBoolean = function (chance) {
    if(!isEmpty(chance) && typeof(chance) === "number"){
        if(this.prevChance!==chance){
            this.booleanItems.setItems([true,false],[chance,100-chance]);
        }
        return this.booleanItems.getItem();
    }
    
    let ran = Math.random();
    if(ran>0.5){
        return true;
    }
    return false;
}

Random.prototype.setChoices = function (items,probability){
    return this.items.setItems(items,probability);
}

Random.prototype.choices = function (items,probability){
    if(items){
        this.items.setItems(items,probability);
    }
    return this.items.getItem();
}

module.exports = Random;