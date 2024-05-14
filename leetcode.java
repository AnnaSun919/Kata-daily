// Repeated Substring Pattern
// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 

class Solution {
  public boolean repeatedSubstringPattern(String s) {
      boolean result = false; 
      
      for (int i = 1 ; i <s.length() ; i ++) {
            if(s.length()%i == 0) {	
              boolean subStirngResult = true; 
                for (int j = 0 ; j <s.length() ; j ++) {

                  if(j%i==0&& j+i+i <= s.length()) {
                    String test = s.substring(j,j+i);
                    String remainder = s.substring(j+i,j+i+i);
                    if(!test.equals(remainder)) subStirngResult = false; 
                  }
                }
                
                if(subStirngResult) {
                  result = true;
                    break; 
                }   	
            }
          }
      return result ; 
      
  }
// Find Peak Element

// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

  public int findPeakElement(int[] nums) {
      
    int peakIndex = 0 ; 
    int peakNum = nums[0];
        for (int i =0 ; i<nums.length ; i ++) {
            if(nums[i]> peakNum) {
                peakNum = nums[i]; 
                peakIndex = i ;
            }    
        }
    return peakIndex;
}
  
}



