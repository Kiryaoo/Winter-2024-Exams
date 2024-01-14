// Get day number
"use strict";

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const daysOrder = (dayString) => {
  for (let i = 0; i < days.length; i++) {
    if (dayString.startsWith(days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = daysOrder;
