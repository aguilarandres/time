// ... module.exports
const to_seconds = require("./date.js")

describe( 'test for integer values', () => {

  test('test for zero', () => {
    expect( to_seconds(0) ).toBe(0);
  });

  test('test for one thousand', () => {
    expect( to_seconds(1000) ).toBe(1);
  });

  test('test for negative values', () => {
    const run = () => {
      to_seconds(-1)
    }
    expect(run).toThrow("Parameter is less than zero")
  });

});

describe( 'test for non numeric data types', () => {
  test('test for not a number', () => {
    const run = () => {
      to_seconds(NaN)
    }
    expect( run ).toThrow("Parameter is not a number");
  });

  test('test for undefined', () => {
    const run = () => {
      to_seconds(undefined)
    }
    expect(run).toThrow("Parameter is not a number");
  });

  test('test for object', () => {
    const run = () => {
      to_seconds({})
    }
    expect(run).toThrow("Parameter is not a number");
  });
});
