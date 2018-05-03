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
        let j = 0;
        while (str[i] === sub[j] && j < sub.length) {
            if (j === sub.length - 1) {
                return true;
            }
            i ++;
            j ++;
        }
    }
    return false;
}

isSubstring('cat', 'concatenate');
isSubstring('bat', 'ball')

