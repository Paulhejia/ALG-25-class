// 法一：最容易想到的就是对两个字符进行排序然后直接返回他们两相不相等。
// 法二：储存字符串s中字符出现的次数，然后遍历t中的字符消除我们储存在
// table中s的字符，但凡出现负数则说明不相等

/* time: O(NlogN) 排序的时间复杂度
space: O(log N) 排序需要 O(logn) 的空间复杂度 */
var isAnagram = function(s, t) {
    return s.length === t.length && [...s].sort().join('') === [...t].sort().join('');
};    


var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const table = new Array(26).fill(0);
    for ( let i = 0; i < s.length; i++ ) {
        // 控制长度为 26；a 的ascill 码为97；
        table[s.codePointAt(i) - 'a'.codePointAt(0)]++;
    }
    for (let i = 0; i < t.length; i++ ) {
        table[t.codePointAt(i) - 'a'.codePointAt(0)]--;
        if(table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
            return false;
        }
    }
    return true;
}    