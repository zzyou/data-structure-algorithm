/* binary search */

function binarySearchRecursive(arr, x, left, right) {
    if (left > right) {
        return false;
    }
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === x) {
        return true;
    } else if (x < arr[mid]) {
        return binarySearchRecursive(arr, x, left, mid - 1);
    } else {
        return binarySearchRecursive(arr, x, mid + 1, right);
    }
}
// start calling binarySearchRecursive function's left as 0, and right as arr.length - 1.

function binarySearchIterative(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === x) {
            return true;
        } else if (x < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
}



/* deque */

class Deque {
    constructor(deque) {
        if (deque === undefined) {
            this.deque = [];
        } else {
            this.deque = Array.from(deque);
        }
    }

    enqueueHead(val) {
        return this.deque.unshift(val);
    }

    enqueueTail(val) {
        return this.deque.push(val);
    }

    dequeueHead() {
        return this.deque.shift();
    }

    dequeueTail() {
        return this.deque.pop();
    }

    peekFirst() {
        return this.deque[0];
    }

    peekLast() {
        let len = this.length();
        return this.deque[len - 1];
    }

    length() {
        return this.deque.length;
    }

    empty() {
        return this.deque.splice(0);
    }
}



/* breadth first search */

// const tree = {
//     root: {
//         value: 8,
//         left: {
//             value: 3,
//             left: {
//                 value: 1,
//                 left: null,
//                 right: null,
//                 level: 2
//             },
//             right: {
//                 value: 6,
//                 left: {
//                     value: 4,
//                     left: null,
//                     right: null,
//                     level: 3
//                 },
//                 right: {
//                     value: 7,
//                     left: null,
//                     right: null,
//                     level: 3
//                 },
//                 level: 2
//             },
//             level: 1
//         },
//         right: {
//             value: 10,
//             left: null,
//             right: {
//                 value: 14,
//                 left: {
//                     value: 13,
//                     left: null,
//                     right: null,
//                     level: 3
//                 },
//                 right: null,
//                 level: 2
//             },
//             level: 1
//         },
//         level: 0
//     },
//     height: 4,
//     size: 9
// }

// const tree = {
//     root: {
//         value: 8,
//         child: [{
//             value: 3,
//             child: [{
//                     value: 1,
//                     child: [],
//                     level: 2
//                 },
//                 {
//                     value: 6,
//                     child: [{
//                         value: 4,
//                         child: [],
//                         level: 3
//                     },
//                     {
//                         value: 7,
//                         child: [],
//                         level: 3
//                     }],
//                     level: 2
//             }],
//             level: 1
//         },
//         {
//             value: 10,
//             child: [{
//                 value: 14,
//                 child: [{
//                     value: 13,
//                     child: [],
//                     level: 3
//                 }],
//                 level: 2
//             }],
//             level: 1
//         }],
//         level: 0
//     },
//     height: 4,
//     size: 9
// };

var mytree = {
    root: {
        value: 8,
        children: [{
            value: 3,
            children: [{
                value: 1,
                children: []
            },
            {
                value: 6,
                children: [{
                    value: 4,
                    children: []
                },
                {
                    value: 7,
                    children: []
                }]
            }]
        },
        {
            value: 10,
            children: [{
                value: 14,
                children: [{
                    value: 13,
                    children: []
                }]
            }]
        }]
    }
};

function breadthFirstSearch(tree, target) {
    let queue = [];
    queue.push(tree.root);
    while (queue.length > 0) {
        let nodeToCheck = queue.shift();
        if (nodeToCheck.value === target) {
            return true;
        }
        else if (nodeToCheck.children.length > 0) {
            nodeToCheck.children.forEach(child => {
                queue.push(child);
            });
        }
    }
    return false;
}
