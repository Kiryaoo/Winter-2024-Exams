// Sum all number values in dict

'use strict'

const count = (obj) => {
  const values = Object.values(obj);
  let sum = 0;

  for (const value of values) {
    if (typeof value === "number") {
      sum += value;
    }
  }

  return sum;
};

module.exports = count;
