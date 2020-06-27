// Metszet tétele

const section = (src1, src2) => {
  const arr = [];
  for (let i = 0; i < src1.length; i++) {
    for (let j = 0; j < src2.length; j++) {
      if (src1[i] === src2[j] && !arr.includes(src1[i])) {
        arr.push(src1[i]);
      }
    }
  }
  return arr;
};
