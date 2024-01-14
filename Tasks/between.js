// Extract substring between prefix and suffix
'use strict'

const getValueBetween = (str, prefix, suffix) => {

  if (str.indexOf(prefix) === -1) {
    return '';
  }
  else {

    str = str.substring(str.indexOf(prefix)+prefix.length);
    if (suffix) {

      if (str.indexOf(suffix) === -1) {
        return '';
      } else {
        str = str.substring(0, str.indexOf(suffix));
      }
    }
  }
  return str;
};

module.exports = getValueBetween;
