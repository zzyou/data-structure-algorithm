function check(arr) {
    if (arr.length !== 9) {
      return false;
    }

    if ((new Set(arr)).size !== 9) {
      return false;
    }

    for (let num of arr) {
      if (!/[1-9]/.test(num)) {
        return false;
      }
    }

    return true;
  }
  
  
function sudoku(arr) {
    for (let row of arr) {
      if (!check(row)) {
        return false;
      }
    }
    
    // arr.slice() cannot go into the inner array to make a hard copy.
    // the new inner array is still pointing to the same original inner array.
    // if using .fill([]), all []'s are pointing to the same [].
    // that's why we need to map into the inner array, and make new arrays for each.
    let columnArr = [...Array(9)].map(e => Array(9));
    for (let i = 0; i <= 8; i++) {
      for (let j = 0; j <= 8; j++) {
        columnArr[j][i] = arr[i][j];
      }
    }

    for (let column of columnArr) {
      if (!check(column)) {
        return false;
      }
    }
  
    let boxArr = [...Array(9)].map(e => Array(9));
    for (let k = 0; k <= 8; k++) {
      for (let m = 0; m <= 8; m++) {
        let rowIndex = Math.floor(m / 3) + (3 * (Math.floor(k / 3)));
        let columnIndex = (m % 3) + (3 * (k % 3));
        boxArr[k][m] = arr[rowIndex][columnIndex];
      }
    }

    for (let box of boxArr) {
      if (!check(box)) {
        return false;
      }
    }
    
    return true;
  }
  
  
  let arr = [
    [9, 7, 1, 2, 3, 8, 4, 5, 6],
    [5, 2, 3, 7, 4, 6, 8, 1, 9],
    [4, 6, 8, 1, 5, 9, 3, 7, 2],
    [1, 3, 5, 4, 6, 7, 9, 2, 8],
    [6, 4, 7, 8, 9, 2, 5, 3, 1],
    [8, 9, 2, 3, 1, 5, 7, 6, 4],
    [2, 5, 4, 6, 8, 3, 1, 9, 7],
    [7, 8, 9, 5, 2, 1, 6, 4, 3],
    [3, 1, 6, 9, 7, 4, 2, 8, 5]
  ];
    
  sudoku(arr);
