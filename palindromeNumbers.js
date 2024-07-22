var isPalindrome = function (x) {
  const store = x;

  let flag = 0,
    b;
  while (x > 0) {
    b = x % 10;
    flag = flag * 10 + b;
    x = Math.floor(x / 10);
  }
  if (store === flag) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
