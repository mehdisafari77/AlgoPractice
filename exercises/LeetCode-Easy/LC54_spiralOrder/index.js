/* Given an m x n matrix, return all elements of the matrix in spiral order. */

// Link: https://leetcode.com/problems/spiral-matrix/


// Solution 1

// Time Complexity: O(n)

// Space Complexity: O(n)

function spiralOrder(matrix) {
    var n = matrix.length;
    var m = (matrix[0] || []).length;
    var res = [];
    var x1 = 0;
    var x2 = m - 1;
    var y1 = 0;
    var y2 = n - 1;

    while (x1 <= x2 && y1 <= y2) {
      for (var x = x1; x <= x2; x++) res.push(matrix[y1][x]);
      for (var y = y1 + 1; y <= y2; y++) res.push(matrix[y][x2]);
      if (x1 < x2 && y1 < y2) {
        for (var x = x2 - 1; x > x1; x--) res.push(matrix[y2][x]);
        for (var y = y2; y > y1; y--) res.push(matrix[y][x1]);
      }
      x1++;
      x2--;
      y1++;
      y2--;
    }
    return res;
  };



  // Solution 2

  // Time Complexity: O(n)

// Space Complexity: O(n)

  var spiralOrder = function(matrix) {
	// check for an edge
	// matrix is empty
    let result = [];
    if(matrix.length === 0)
        return result;
    
    let startRow = 0;
    let endRow = matrix.length - 1;
    let startCol = 0;
    let endingCol = matrix[0];
    let endCol = endingCol.length - 1;
    
    while(startRow <= endRow && startCol <= endCol){
        for(let col = startCol; col <= endCol; col++){
            result.push(matrix[startRow][col]);
        }
        for(let row = startRow + 1; row <= endRow; row++){
            result.push(matrix[row][endCol]);
        }
        for(let col = endCol - 1; col >= startCol; col--){
           // edge case : test case [[1,2,3,4],[10,11,12,13],[9,8,7,6]]
		   if(startRow == endRow){
                break;
            }
            result.push(matrix[endRow][col]);
        }
        for(let row = endRow - 1; row > startRow; row--){
           // edge case: test case [[1,2,3],[12,13,4],[11,14,5],[10,15,6],[9,8,7]]
		   if(startCol == endCol){
                break;
            }
            result.push(matrix[row][startCol]);
        }
        startRow += 1;
        endRow -= 1;
        startCol += 1;
        endCol -= 1;
    } 
    return result;
};

module.exports = spiralOrder;
