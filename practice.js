/* format phone number */
function formatPhoneNum(num) {
    const str = num.toString().split(/[^0-9]+/).join('');
    if (str.length < 10) {
        return 'Error: it should be 10 digits';
    }
    let newStr = '';
    if (str.length === 10) {
        newStr = str;
    }
    else {
        for (let i = str.length - 10; i <= str.length - 1; i ++) {
            newStr += str[i];
        }
    }
    const phoneNum = '(' + newStr[0] + newStr[1] + newStr[2] + ') ' + newStr[3] + newStr[4] + newStr[5] + '-' + newStr[6] + newStr[7] + newStr[8] + newStr[9];
    return phoneNum;
}

formatPhoneNum(4152665498);
formatPhoneNum('4152665498');
formatPhoneNum('4,152,665,498');
formatPhoneNum('0004152665498');



/* print out each character and index in an array */
function chaInd(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i ++) {
        str += (arr[i] + i + ',');
    }
    return str;
}


function chaInd(arr) {
    let str = '';
    let i = 0;
    while (i < arr.length) {
        str += (arr[i] + i + ',');
        i++;
    }
    return str;
}



/* will the ball fall off the mountain? */
function ballFall(arr, index) {
    if (index === 0 || index === arr.length - 1) {
        return true;
    }
    for (let i = index; i >= 1; i--) {
        if (arr[i - 1] >= arr[i]) {
            for (let j = index; j <= arr.length - 1; j++) {
                if (arr[j + 1] >= arr[j]) {
                    return false;
                }
            }
            return true;
        }
    }
    return true;
}

ballFall([1, 3, 4, 2, 8, 3, 0], 2);


/* what if the arr is a nested array? */


