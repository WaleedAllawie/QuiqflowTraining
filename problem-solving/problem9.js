const str = 'abc';

const comb = (str) => {
  const res = [];
  if (str.length === 0) {
    return [''];
  }
  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];

    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const remainingCombs = comb(remainingChars);
    for (const c of remainingCombs) {
      res.push(firstChar + c);
    }
  }
  return res;
};

console.log(comb(str));
