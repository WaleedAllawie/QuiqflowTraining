//1) time complexity : O(N)^2 Because there is 2 for loops

//2) after adding the isSwapped flag it becomes O(N) best case, because it only passes the loop
//one time and doesnt continue unnesscary passes if the arr is sorted

//3) in the inner loop there is no need to consider every element
// just loop until length-i-1

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }

    if (!isSwapped) {
      break;
    }
  }
  return arr;
};

console.log(bubbleSort([34, 203, 3, 746, 200, 984, 198, 764, 9]));
