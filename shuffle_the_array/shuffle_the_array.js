// -- Shuffle the Array --

// Regular solution
var shuffle = function(nums, n) {
    let x = [], y = [];
    let result = [];
    for (let i = 0;i<nums.length;i++){
        if (i < n){
            x.push(nums[i])
        }
        else if (i >= n){
            y.push(nums[i]);
        }
    }
    for (let i = 0;i<n;i++){
        result = result.concat(x[i],y[i]);
    }
    return result;
};

// Short solution
var shuffle_2 = function(nums, n) {
    let result = []
    for(let i = 0; i < n; i++){
	
        result.push(nums[i], nums[i+n])
    }
    return result;
};

// Example 1
console.log(shuffle([2,5,1,3,4,7], 3));

// Example 2
console.log(shuffle([1,2,3,4,4,3,2,1], 4));

// Example 3
console.log(shuffle_2([1,1,2,2], 2));