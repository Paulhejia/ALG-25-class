// time: O(n + k)
// space: O(n)

var reverseStr = function(s, k) {
    var a = [...s];
    for(let start = 0; start < a.length; start += 2) {
        let i = start;
        // 只翻转前 k 个元素
        let j = Math.min(start + k - 1, a.length - 1);
        while(i < j) {
            const temp = s[j];
            s[j] = s[i];
            s[i] = s[j];
        }
    }
    return a.join('');
}