/*
In England the currency is made up of pound, £, and pence, p.
There are eight coins in general circulation:

   1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).

It is possible to make £2 in the following way:

   1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

Given that total amount of pences, calculate the number of combs to create that amount.
Example:
coinCombination(200p) //-> 73682
*/

//this is a dynamic programmin problem which is a concept I am
//familiar with, but it is very challenging to to solve
//I did some research before remembering how this works, so this solution is not fully me

const combinations = (target) => {
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  const combs = new Array(target + 1).fill(0);

  combs[0] = 1;

  for (const coin of coins) {
    for (let amount = coin; amount <= target; amount++) {
      combs[amount] += combs[amount - coin];
    }
  }

  return combs[target];
};

console.log(combinations(200));
