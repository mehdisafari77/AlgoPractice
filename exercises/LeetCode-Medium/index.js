/* Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them. */

// Link: https://leetcode.com/problems/sort-characters-by-frequency/

// Time Complexity: 

// Space Complexity: 

var frequencySort = function(s){
    let map = {};
    
    for(const letter of s){
      map[letter] = (map[letter] || 0) + 1;
      
    }
    let result = "";
    let sorted = Object.keys(map).sort((a,b)=> map[b] - map[a]);
    for(letter of sorted){
      for(let i = 0; i < map[letter]; i++){
        result += letter;
      }
    }
    return result;
  }
  let string = "tree";
  console.log(frequencySort(string));