/* input: array of positive integers.
output: the smallest missing positive integer.
[4, 2, 1, 7] => 3
[1, 3, 4, 2] => 5
[6, 5, 7, 8] => 1
[4, 2, 1, 7, 1, -7] => 3
[-4, -1, -3, 0, 0] => 1
Time: O(N)
Space: O(N) */

// function with two for loops is still O(N) or O(2N), not O(N**2).
function missingInt(arr) {
    let obj = {};
    // count how many unique positive integers are in the array.
    let count = 0;
    for (let num of arr) {
        if (num > 0 && !obj[num]) {
            obj[num] = 1;
            count ++;
        }
    }
    // if there is no positive integers, the following while loop won't run.
    // so I need to use an if statement to catch it.
    if (count === 0) {
        return 1;
    }
    let posInt = 1;
    // the maximum missing positive integers should be no more than count.
    // but if all the nums are already consecutive from 1, it'll be count + 1.
    while (posInt <= count + 1) {
        if (!obj[posInt]) {
            return posInt;
        }  
        posInt ++;
    }
}

missingInt([4, 2, 1, 7]); // 3
missingInt([1, 3, 4, 2]); // 5
missingInt([6, 5, 7, 8]); //1
missingInt([4, 2, 1, 7, 1, -7]); // 3
missingInt([-4, -1, -3, 0, 0]); // 1



/* input: array of arrays of (1, 0).
1's are all rectangles.
1's are islands, and 0's are the sea.
output: number of islands.
[
    [1, 1, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 1, 0, 0, 1]
]
=> 5
Time: O(N*N)
Space: O(1) */

function islandCount(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            // check adjacent right and below, only when current element value is 1.
            if (arr[i][j] === 1 && !arr[i][j+1]) {
                // cannot access property on undefined.
                // when hitting the last row, arr[i+1][j] will encounter type error.
                if (i === arr.length - 1) {
                    count++;
                }
                else if (!arr[i+1][j]) {
                    count++;
                }
            }    
        }
    }
    return count;
}

var islandarr = [
    [1, 1, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 1, 0, 0, 1]
];

islandCount(islandarr);
