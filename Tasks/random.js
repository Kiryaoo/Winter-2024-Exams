// Generate random integer value in given range
'use strict';

const random = (min, max) => {

  const result = min + Math.floor(Math.random() * (max - min + 1));
  return result;
}
module.exports = random;
