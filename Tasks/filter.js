// Filter array by type name

'use strict'

// Filter array by type name
const filterArrayByTypeName = (typeArray, typeName) => {
  let removeElem = [];


  for (const elem of typeArray) {
    if (typeof elem != typeName) {
      const index  = typeArray.indexOf(elem);
      removeElem.unshift(index);
    }
  }

  for (const elem of removeElem){
    typeArray.splice(elem, 1);
  }


  return typeArray;
};

module.exports = filterArrayByTypeName;
