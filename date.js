/*
new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
*/

// Invoking JavaScript Date as a function (i.e., without the new operator)
// will return a string representing the current date and time.
const today = new Date();
const start = new Date(1985, 2, 19);

const elapsed = today.getTime() - start.getTime();

function to_seconds( milliseconds ) {

  // handle NaN, undefined, object
  if(isNaN(milliseconds))
    throw new Error("Parameter is not a number")
  // handle negative values
  if(milliseconds < 0)
    throw new Error("Parameter is less than zero")

  return milliseconds / 1000;
}
// node js exports this function as a variable stored in module.exports
module.exports = to_seconds;
