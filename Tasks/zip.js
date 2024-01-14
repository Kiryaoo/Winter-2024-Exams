// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

'use strict'
const zip = (arr1 = [], arr2 = []) => {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    result.push([arr1[i++], arr2[j++]]);
  }

  return result;
};

module.exports = zip;
