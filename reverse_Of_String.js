// Write a program to reverse a string.
// Example:
//      Input: Somebody Else
//      Output: eslE ydobemoS

const reverse = (str) => {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Invalid input!";
  } else {
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  //console.log(backwards);
  return backwards.join("");
};

// const rev_String = (str) => {
//   return str.split("").reverse().join("");
// };

// const spread_Reverse = (str) => [...str].reverse().join("");

console.log(reverse("Somebody Else"));
