/**
 * Question 4 (0) Given an array of strings, find if all the strings can be
 * chained to form a circle. Two string s1 and s2 can be chained, iff the last
 * letter of s1 is identical to the first letter of s2. For example, “abc” and
 * “cd” can be chained, “abc” and “dz” can not be chained. Example Input: arr[]
 * = {"aaa", "bbb", "baa", "aab"}; Output: True, The given input strings can be
 * chained to form a circle. The strings can be chained as "aaa", "aab", "bbb"
 * and "baa"
 * 
 */

class TreeNode {
    public TreeNode left;
    public TreeNode right;
    public int val;

    public TreeNode(int val) {
        this.val = val;
    }
}

class isCousin {
    public static boolean result = false;

    public static boolean isCousin(TreeNode root, TreeNode n1, TreeNode n2) {
        dfs(root, n1, n2, 0);
        return result;
    }

    public static int dfs(TreeNode cur, TreeNode n1, TreeNode n2, int level) {
        System.out.println(cur.val);
        if (cur == null) {
            return -1;
        }
        if (cur == n1 || cur == n2) {
            return level;
        }
        int left = dfs(cur.left, n1, n2, level + 1);
        int right = dfs(cur.right, n1, n2, level + 1);
        if (left == right && left > level + 1) {
            result = true;
        }

        return left > right ? left : right;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        // root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(4);
        // root.right.left = new TreeNode(6);
        // root.right.right = new TreeNode(7);
        TreeNode i1 = root.left;
        TreeNode i2 = root.right;
        System.out.println(isCousin(root, i1, i2));
        System.out.println("SB");
    }
}