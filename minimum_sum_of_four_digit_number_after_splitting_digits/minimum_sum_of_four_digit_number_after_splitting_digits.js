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

// Faster 95%
var minimumSum2 = function(nums) {
    let arr=[];
    while(nums){
        arr.push(nums%10);
        nums = Math.trunc(nums / 10);
    }//get all the numbers into an array and sort them
    arr = arr.sort((a,b)=>a-b);
    return (((arr[0]*10)+arr[3])+((arr[1]*10)+arr[2])) 
	};

// Example 1
console.log(minimumSum(2932));

// Example 2
console.log(minimumSum2(4009));
