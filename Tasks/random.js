// Generate random integer value in given range
'use strict';

const random = (min, max) => {

  let result = min + Math.floor(Math.random() * (max - min + 1));
  return result;
}
module.exports = random;
