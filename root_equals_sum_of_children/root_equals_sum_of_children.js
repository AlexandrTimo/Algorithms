// -- Root Equals Sum of Children --

let root = [5,1,3];
let root2 = [10,4,6];

//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var checkTree = function(root) {
   root.val = root[0];
   root.left = root[1];
   root.right = root[2];

   let sum = root.left + root.right;
   return (sum===root.val) ? true : false
};

console.log(checkTree(root2))