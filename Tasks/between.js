// Extract substring between prefix and suffix
'use strict'

const getvaluebetween = (str, p, s) => {

  if (str.indexOf(p) === -1) {
    return '';
  }
  else {

    str = str.substring(str.indexOf(p)+p.length);
    if (s) {

      if (str.indexOf(s) === -1) {
        return '';
      } else {
        str = str.substring(0, str.indexOf(s));
      }
    }
  }
  return str;
};

module.exports = getvaluebetween;
