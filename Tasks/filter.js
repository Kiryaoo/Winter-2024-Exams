// Filter array by type name

'use strict'

const Filter = (T, t) => {
  let remove = [];
  for (C of T) {
    let x = T.indexOf(C);
    if (typeof T[x] !== t) {
      remove.unshift(x);
    }
  }
  for (x of remove) T.splice(x, 1);
  return T;
};

module.exports = Filter;
