/**
 * Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
 */

 var validPalindrome = function(s) {
     let arr = s.split('');
     let left = 0, right = arr.length - 1;
     while(left < right) {
         if(arr[left] === arr[right]) {
             left++;
             right--;
         }else {
            return helper(arr, left+1, right) || helper(arr, left, right-1); 
         }
     }
     return true;
 }

 function helper(arr, left, right) {
     if(left === right) {
         return true;
     }

     while(left < right) {
         if(arr[left] !== arr[right]) {
             return false;
         }
         left++;
         right--;
     }
     return true;
 }

 console.log(validPalindrome('abbca'));