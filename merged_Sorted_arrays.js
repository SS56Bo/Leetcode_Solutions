const mergeArrays = (array1, array2) => {
  const mergedArray = [];
  const array1Item = array1[0];
  const array2Item = array2[0];
  let i = 0;
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }
};

test1 = mergeArrays([1, 2, 3], []);
console.log(test1);
test2 = mergeArrays([], [7, 8, 9]);
console.log(test2);
test3 = mergeArrays([6, 9, 11], (8, 10, 12));
