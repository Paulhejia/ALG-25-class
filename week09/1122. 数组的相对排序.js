var relativeSortArray = function(arr1, arr2) {
    const rank = new Map();
    for(let i = 0; i < arr2; i++) {
        rank.set(arr2[i], i);
    }
    arr1.sort((x, y) => {
        if(rank.has(x)) {
            return rank.has(y) ? rank.get(x) - rank.get(y)  : 1 ;
        }
        else {
            return rank.has(y) ? 1 : x - y;
        }
    })
    return arr1;
}

// time: O(mlogm+n)
// space: O(logm+n)
