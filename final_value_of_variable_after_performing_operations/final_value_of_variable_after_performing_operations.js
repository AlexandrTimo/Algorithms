// -- Final Value of Variable After Performing Operations --

var finalValueOperations = function (operations) {
  let x = 0;
  operations.forEach((cur) => {
    if (cur === "++X" || cur === "X++") {
      x += 1;
    } else if (cur === "--X" || cur === "X--") {
      x -= 1;
    } else {
      x = 0;
    }
  });
  return x;
};

// Example 1:
console.log(finalValueOperations(["--X", "X++", "X++"]));

// Example 2:
console.log(finalValueOperations(["++X", "++X", "X++"]));

// Example 3:
console.log(finalValueOperations(["X++", "++X", "--X", "X--"]));
