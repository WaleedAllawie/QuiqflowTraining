const chain = (num) => {
  let terms = 1;
  while (num != 1 && num > 0) {
    if (num % 2 == 0) {
      num = num / 2;
      terms += 1;
    } else if (num % 2 != 0) {
      num = 3 * num + 1;
      terms += 1;
    }
  }
  return terms;
};

const findLongestChain = (limit) => {
  let maxTerms = 0;
  let maxNumber = 0;

  for (let i = 2; i <= limit; i++) {
    const currentTerms = chain(i);

    if (currentTerms > maxTerms) {
      maxTerms = currentTerms;
      maxNumber = i;
    }
  }

  return { number: maxNumber, terms: maxTerms };
};

console.log(findLongestChain(1000000));
