# random-all
Generates random numbers, unique random numbers
```mardown
  const random = require('random-all')
  
  let uniqueValue = random.getUnique(1,10);
  let randomInt = random.getInt(1,10);
  let randomFloat = random.getFloat(1,10);
```

## Installation
This is a Node.js module available through the npm registry.
Installation is done using the npm install command:
```markdown
npm install --save random-all
```

## Usage
```javascript
  const random = require('random-all')
```
-  **getUnique(min,max)**
  Returns a unique random number from (including) `min` to (including) `max`.  After all unique value between min and max it will restart
  cycle.
      * **min** : minimum value of random number. Defaults to 1.
      * **max** : maximum value of random number. Defaults to 100.

- ### getUnique(min,max)
  Returns a unique random number from (including) `min` to (including) `max`.  After all unique value between min and max it will restart
  cycle.
  * **min** : minimum value of random number. Defaults to 1.
  * **max** : maximum value of random number. Defaults to 100.
  
  ```javascript
    const random = require('random-all')

    let val = random.getUnique(1,10);// unique val is between 1 and 10.
    let val = random.getUnique()// unique val is between 1 and 100.

  ```
  
-  **getInt(min,max)**
  Returns a random number from (including) `min` to (including) `max`.
      * **min** : minimum value of random number. Defaults to 1.
      * **max** : maximum value of random number. Defaults to 100.

- ### getInt(min,max)
  Returns a random number from (including) `min` to (including) `max`.
  * **min** : minimum value of random number. Defaults to 1.
  * **max** : maximum value of random number. Defaults to 100.
  
  ```javascript
    const random = require('random-all')

    let val = random.getInt(1,10);// val is between 1 and 10.
    let val = random.getInt()// val is between 1 and 100.

  ```
-  **getFloat(min,max)**
  Returns a random number from (including) `min` to (including) `max`.
      * **min** : minimum value of random number. Defaults to 1.
      * **max** : maximum value of random number. Defaults to 100.

- ### getFloat(min,max)
  Returns a random number from (including) `min` to (including) `max`.
  * **min** : minimum value of random number. Defaults to 1.
  * **max** : maximum value of random number. Defaults to 100.
  
  ```javascript
    const random = require('random-all')

    let val = random.getFloat(1,10);// val is between 1 and 11.
    let val = random.getFloat(0,0);// val is between 0 and 1.
    let val = random.getFloat(1,1);// val is between 1 and 2.
    let val = random.getFloat()// val is between 1 and 101.

  ```

  - ### getChar(str,isUnique)
  Returns a random char from string given.
  * **str** : string value from which a random char to be fetched. Defaults to "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".
  * **isUnique** : Return unique char. 
  
  ```javascript
    const random = require('random-all')

    let val = random.getChar();// val will be a char from "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let val = random.getChar("abc");// val will be a or b or c.

    //Calling in a loop without unique
    for(let i = 0;i<4;i++){
      console.log(random.getChar("abc"));
    } //output can be a,b,a,a;

    //Calling in a loop with unique
    for(let i = 0;i<4;i++){
      console.log(random.getChar("abc",true));
    } //output can be b,a,c,a;

  ```

- ### getBoolean(percent)
  Returns a random boolean value.
  * **percent** : this percent of times true will be returned. Defaults to 50
  
  ```javascript
    const random = require('random-all')

    let val = random.getBoolean(); Probabilty of true and false is 50
    let val = random.getBoolean(30); Probabilty of true and false is 30 and 70 repectively.

  ```

- ### choices(population,weights)
  Returns a random boolean value.
  * **population** : Return a random element from the non-empty sequence. 
  
  ```javascript
    const random = require('random-all')

    let val = random.getBoolean(); Probabilty of true and false is 50
    let val = random.getBoolean(30); Probabilty of true and false is 30 and 70 repectively.

  ```