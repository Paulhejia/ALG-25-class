var firstUniqChar = function(s) {
  const frequency = _.countBy(s);
  for(const [i, ch] of Array.from(s).entries()) {
    if(frequency[ch] === 1) {
        return i;
    }
  }
  return -1;
};

var firstUniqChar = function(s) {
    const frequency = new Map();
    for(let i = 0; i < s.length; i++) {
        const ch = s.charAt(i);
        if(frequency.has(ch)) {
            frequency.set(ch, -1);
        }
        else {
            frequency.set(ch, i);
        }        
    }
    let first = -1;
    for(let pos of frequency.values()) {
        if(pos !== -1 && pos < first) {
            first = pos;
            break;
        }
    }
    return first;
}

