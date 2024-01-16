// Extract substring between prefix and suffix
"use strict";

const getValueBetween = (str, prefix, suffix) => {
  const prefixIndex = str.indexOf(prefix);

  if (prefixIndex === -1) {
    return "";
  }
  let result = str.substring(prefixIndex + prefix.length);
  if (suffix) {
    const suffixIndex = result.indexOf(suffix);
    if (suffixIndex === -1) {
      return "";
    }
    result = result.substring(0, suffixIndex);
  }
  return result;
};

module.exports = getValueBetween;