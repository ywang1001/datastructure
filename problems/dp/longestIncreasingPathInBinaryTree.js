//
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function longestAscendingTopDownPath(root) {
    return dp(root, 1, 0);
}

var res = 0;

function dp(root, curLength, preValue) {
    if(!root) {
       curLengh = 1;
       return;
    }

    curLength = root.val > preValue ? curLength + 1 : 1;
    res = Math.max(res, curLength);
    dp(root.left, curLength, root.val);
    dp(root.right, curLength, root.val);
}

let root = new TreeNode(5);
root.left = new TreeNode(2);
root.right = new TreeNode(4);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(7);
root.right.right.left = new TreeNode(6);
longestAscendingTopDownPath(root);
console.log(res);