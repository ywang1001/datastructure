/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */

class TreeNode {
    public TreeNode left;
    public TreeNode right;
    public int val;

    public TreeNode(int val) {
        this.val = val;
    }
}

class Solution {
    TreeNode prev = null;
    TreeNode head = null;

    public boolean findTarget(TreeNode root, int k) {
        if (root == null) {
            return false;
        }
        helper(root);
        prev.right = head;
        head.left = prev;
        TreeNode tail = head;
        tail = tail.right;
        while (tail != null && tail.right != null && tail.right != head) {
            tail = tail.right;
        }
        System.out.println(tail.val);
        TreeNode start = head;
        while (start != tail) {
            if (start.val + tail.val == k) {
                return true;
            } else if (start.val + tail.val < k) {
                start = start.right;
            } else {
                tail = tail.left;
            }
        }
        return false;
    }

    public void helper(TreeNode cur) {
        if (cur == null) {
            return;
        }
        helper(cur.left);
        if (prev == null) {
            head = cur;
            prev = cur;
        } else {
            cur.left = prev;
            prev.right = cur;
            prev = cur;
        }
        helper(cur.right);
    }

}

// Time: O(n), Space: O(1)