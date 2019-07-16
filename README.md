# random-all
Generates random numbers, unique random numbers
```mardown
  const random = require('random-all')
  
  let uniqueValue = random.getUnique(1,10);
  let randomInt = random.getInt(1,10);
  let randomInt = random.getFloat(1,10);
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
  
- ### getInt(min,max)
  Returns a random number from (including) `min` to (including) `max`.
  * **min** : minimum value of random number. Defaults to 1.
  * **max** : maximum value of random number. Defaults to 100.
  
  ```javascript
    const random = require('random-all')

    let val = random.getInt(1,10);// val is between 1 and 10.
    let val = random.getInt()// val is between 1 and 100.

  ```
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
