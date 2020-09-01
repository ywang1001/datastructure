/**
 * Given a binary tree, determine if it is a complete binary tree.

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

 */

 function TreeNode(val, left, right) {
     this.val = (val === undefined ? 0 : val);
     this.left = (left === undefined ? null : left);
     this.right = (right === undefined ? null : right);
 }

 var isCompleteTree = function(root) {
     if(!root) {
         return true;
     }
     let queue = [];
     queue.unshift(root);
     let flag = false;
     while(queue.length !== 0) {
         let size = queue.length;
         for(let i = 0; i < size; ++i) {
             let curN = queue.pop();
             if(!curN) {
                 flag = true;
             }else {
                 if(flag) {
                     return false;
                 }
                 queue.unshift(curN.left);
                 queue.unshift(curN.right);
             }
         }
     }
     return true;
 }