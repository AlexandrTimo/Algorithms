// -- Binary Search --

// Example 1 and 2
var search = function(nums, target) {
    let found = nums.indexOf(target);
    if (found>=0){
        return alert (found);
    }
    else{
        return alert (-1);
    }
    

};
// Example 1
search([-1,0,3,5,9,12], 9);
// Example 2
search([-1,0,3,5,9,12], 2);
// Example 3
search([5], 5);

