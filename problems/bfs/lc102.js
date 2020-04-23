function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var levelOrder = function(root) {
    if(!root) {
        return [];
    }
    let res = [];
    let queue = [];
    queue.unshift(root);
    while(queue.length > 0) {
        let size = queue.length;
        let curL = [];
        for(let i = 0; i < size; ++i) {
            let tp = queue.pop();
            curL.push(tp.val);
            if(tp.left) {
                queue.unshift(tp.left);
            }
            if(tp.right) {
                queue.unshift(tp.right);
            }
        }
        res.push(curL);
    }
    return res;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.right = new TreeNode(5);

let res = levelOrder(root);
console.log(res);
res[0].forEach(ele => console.log(ele));
console.log('...........');
res[1].forEach(ele => console.log(ele));
console.log('...........');
res[2].forEach(ele => console.log(ele));
console.log('...........');