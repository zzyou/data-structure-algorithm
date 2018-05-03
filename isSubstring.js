/* isSubstring('cat', 'concatenate') => true
isSubstring('bat', 'ball') => false */

function isSubstring(sub, str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === sub[0]) {
            if (str.slice(i, i + sub.length) === sub) {
                return true;
            }
        }    
    }
    return false;
}


// don't use slice
function isSubstring(sub, str) {
    for (let i = 0; i < str.length; i++) {
        // don't use i directly, will mess up with the for loop.
        let strIndex = i;
        let subIndex = 0;       
        while (str[strIndex] === sub[subIndex] && subIndex < sub.length) {
            if (subIndex === sub.length - 1) {
                return true;
            }
            strIndex ++;
            subIndex ++;
        }
    }
    return false;
}

// prefer fewer mutable variables, don't need to declare strIndex.
function isSubstring(sub, str) {
    for (let i = 0; i < str.length; i++) {
        let subIndex = 0;       
        while (str[i + subIndex] === sub[subIndex] && subIndex < sub.length) {
            if (subIndex === sub.length - 1) {
                return true;
            }
            subIndex ++;
        }
    }
    return false;
}

// prefer for loop to while loop, and more descriptive names.
function isSubstring(sub, str) {
    for (let strIndex = 0; strIndex < str.length; strIndex++) {
        for (let subIndex = 0; subIndex < sub.length; subIndex++) {
            if (str[strIndex + subIndex] !== sub[subIndex]) {
                break;
            }
            if (subIndex === sub.length - 1) {
                return true;
            }
        }
    }
    return false;
}

isSubstring('cat', 'concatenate');
isSubstring('bat', 'ball');
isSubstring('aabab', 'aaabab');



/* return the number of matched letters of substring to string 
matchNum('babc', 'babab') => 3
matchNum('babc', 'babababc') => 4 */

function matchNum(sub, str) {
    let highcount = 0;
    for (let strIndex = 0; strIndex < str.length; strIndex++) {
        let count = 0;
        for (let subIndex = 0; subIndex < sub.length; subIndex++) {
            if (str[strIndex + subIndex] === sub[subIndex]) {
                count ++;
            } else {
                break;
            }
            if (count === sub.length) {
                return sub.length;
            }
        }
        if (count > highcount) {
            highcount = count;
        }
    }
    return highcount;
}

matchNum('babc', 'babab');
matchNum('babc', 'babababc');
