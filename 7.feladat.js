const sum = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

const sub = (num1, num2) => {
  const sub = num1 - num2;
  return sub;
};

const divide = (num1, num2) => {
  const div = num1 / num2;
  return div;
};

const multiply = (num1, num2) => {
  const mult = num1 * num2;
  return mult;
};

module.exports = {
  sum,
  sub,
  divide,
  multiply
};
