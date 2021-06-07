/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// time: O(nlogn)
// space: O(logn);
 var merge = function(intervals) {
    if(intervals.length === 0) {
        return [];
    }
    intervals.sort((a, b) => {
        return a[0] > b[0];
    });
    const merged = new Array();
    for(let i = 0;i < intervals.length ;i++) {
        let L = intervals[i][0], R = intervals[i][1];
        if(merged.length === 0 || merged[merged.length - 1][1] < L) {
            merged.push([L, R])
        }
        else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], R);
        }
    }
    return merged;
};