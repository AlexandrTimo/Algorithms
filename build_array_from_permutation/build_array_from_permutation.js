// -- Build Array from Permutation --

var buildArray = function(nums) {
    let ans=[];
    for(let i = 0; i < nums.length; i++){
        ans.push(nums[nums[i]]);
    };
    return console.log(ans);
};

// Example 1
buildArray([0,2,1,5,3,4]);

// Example 2
buildArray([5,0,1,2,3,4]);

