/* quicksort */

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, pivot, left, right) {
    let pivotValue = arr[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

function quickSort(arr, left, right) {
    let pivot;
    let partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}


let arr = [3, 7, 8, 4, 2, 1, 5];
quickSort(arr, 0, 6);



// Another method:

function quickSort2 (arr) {
    if (!arr.length)
      return arr;
  
    var pivot = arr.splice(0, 1);
    var less = [];
    var greater = [];
  
    arr.forEach(function (el) {
      if (el <= pivot)
        less.push(el);
      else
        greater.push(el);
    });
    
    return quickSort(less).concat(pivot, quickSort(greater));
  }



// wikipedia:
function quicksort(arr, lo, hi) {
    if (lo < hi) {
        let p = partition(arr, lo, hi);
        quicksort(arr, lo, p);
        quicksort(arr, p + 1, hi);
    } else {
        return arr;
    }
}

// Lomuto:
function partition(arr, lo, hi) {
    let pivot = arr[hi];
    let i = lo - 1;
    for (let j = lo; j < hi; j++) {
        if (arr[j] < pivot) {
            i = i + 1;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let tempNext = arr[i + 1];
    arr[i + 1] = arr[hi];
    arr[hi] = tempNext;
    return i + 1;
}

// Hoare:
function partition(arr, lo, hi) {
    let pivot = arr[lo];
    let i = lo - 1;
    let j = hi + 1;
    while (arr[i] < pivot) {
        i ++;
    }
    while (arr[j] > pivot) {
        j --;
    }
    if (i >= j) {
        return j;
    }
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


/* 
[5, 3, 8, 4, 7, 1, 0]
[3, 5, 8, 4, 7, 1, 0]   [3, 8, 4, 7, 1, 0, 5]
[3, 4, 5, 8, 7, 1, 0]   [8, 4, 7, 1, 0, 5, 3]  
[3, 4, 1, 5, 8, 7, 0]
[3, 4, 1, 0, 5, 8, 7]

[1, 3, 4, 0, 5, 8, 7]
[1, 0, 3, 4, 5, 8, 7]

[0, 1, 3, 4, 5, 8, 7]

[0, 1, 3, 4, 5, 7, 8]
*/