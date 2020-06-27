const readlineSync = require('readline-sync');

const n = readlineSync.questionInt('Add meg az első számot: ');
const m = readlineSync.questionInt('Add meg a második számot: ');

const task = (n, m) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  let num = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      arr[i][j] = num;
      num *= 2;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      process.stdout.write(arr[i][j] + (j < arr[i].length - 1 ? ' ' : '\r\n'));
    }
  }
};

task(n, m);
