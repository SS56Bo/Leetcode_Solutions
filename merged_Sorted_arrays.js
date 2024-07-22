const mergeArrays = (array1, array2) => {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1,
    j = 1;
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }
  while (array1Item || array2Item) {
    if (array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
};

test1 = mergeArrays([1, 2, 3], []);
console.log(test1);
test2 = mergeArrays([], [7, 8, 9]);
console.log(test2);
test3 = mergeArrays([6, 9, 11], (8, 10, 12));
