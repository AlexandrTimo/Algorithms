// -- Minimum Sum of Four Digit Number After Splitting Digits --


var minimumSum = function(num) {
    let arr = num.toString().split("").map(function(item) {
        return parseInt(item, 10);
    });
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let num1 = arr.splice(arr.indexOf(Math.min(...arr)), 1) + arr.splice(arr.indexOf(Math.max(...arr)), 1);
    let num2 = parseInt(arr.sort().join(""));
    return parseInt(num1) + parseInt(num2);
};

// Example 1
console.log(minimumSum(2932));

// Example 2
console.log(minimumSum(4009));
