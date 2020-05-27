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
