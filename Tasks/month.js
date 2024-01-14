// Get month number
'use strict'



const monthOrder = (stringOfMonth) => {
  const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

  for (let i = 0; i < months.length; i++)
  {
    if (stringOfMonth.toLowerCase().startsWith(months[i])) return i + 1;
  }
  return -1;
};

module.exports = monthOrder;
