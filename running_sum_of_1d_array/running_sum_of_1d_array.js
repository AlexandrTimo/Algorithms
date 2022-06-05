// -- Running Sum of 1d Array --

var runningSum = function(nums) {
    let sum = [];
    sum[0] = nums[0];
    for (let i = 1; i<nums.length; i++){
        sum[i] = sum[i-1] + nums[i];
    }
    return console.log(sum);
};

// Example 1
runningSum([1,2,3,4]);

// Example 2
runningSum([1,1,1,1,1]);

// Example 3
runningSum([3,1,2,10,1]);
