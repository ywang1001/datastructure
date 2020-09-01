/**
 * 
Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
Example 2:

Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.
 */

import java.util.HashMap;
import java.util.Map;

class Solution {
    public int lengthOfLongestSubstringKDistinct(String s, int k) {
        if(s == null || s.length() == 0 || k == 0) {
            return 0;
        }
        if(s.length() == 1) {
            return k > 1 ? 1 : k == 1 ? 1 : 0;
        }
        char[] arr = s.toCharArray();
        int i = 0;
        int index = 0, res = 0;
        Map<Character, Integer> hasTraverse = new HashMap<Character, Integer>();
        hasTraverse.put(arr[0], 1);   //左边界
        ++index;
        for(int j = 1; j < arr.length; ++j) {
           if(!hasTraverse.containsKey(arr[j])) {
               hasTraverse.put(arr[j], 0);
               index++;
           }
           hasTraverse.put(arr[j], hasTraverse.get(arr[j]) + 1);
           if(index > k) {
               while(index > k && i < j) {
                   if(hasTraverse.get(arr[i]) == 1) {
                       hasTraverse.remove(arr[i]);
                       --index;
                   }else {
                       hasTraverse.put(arr[i], hasTraverse.get(arr[i])-1);
                   }
                   ++i;
               }
           }
           res = Math.max(res, j-i+1);
        }
        return res;
    }
}