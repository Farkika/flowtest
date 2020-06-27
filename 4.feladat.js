// Megszámlálás tétele:

const countElement = (arr, element) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      sum += 1;
    }
  }
  return sum;
};
