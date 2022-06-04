// -- Concatenation of Array --

var getConcatenation = function(nums) {
    let ans = [];
    ans = nums.concat(nums)
    return ans;
};

// Example 1
getConcatenation([1,2,1]);

// Example 1
getConcatenation([1,3,2,1]);