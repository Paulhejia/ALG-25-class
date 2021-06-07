var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }

    const table = new Array(26).fill(0);
    for(let i = 0; i < s.length; i++) {
        table[s.codePointAt(i) - 'a'.codePointAt(0)]++;
    }
    for(let j = 0; j < t.length; j++) {
        table[s.codePointAt(j) - 'a'.codePointAt(0)]--;
        if(table[s.codePointAt(j) - 'a'.codePointAt(0)] < 0) {
            return false;
        }
    }
    return true;
}    
