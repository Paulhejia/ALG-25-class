// 字母异位词分组

/* 判断两个单词是否 异位词
1. 排序后的字符串相等
2. 遍历每个子母出现频率是否一样  */

/* 
哈希
n 是 {strs} 中的字符串的数量，
k 是 {strs} 中的字符串的的最大长度
time: Object(N klogk)
space: O(nk) 

用 Map或者 Object 实现 hash 记录
*/
var groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) {
        let array = Array.from(str);
        array.sort();
        let key = array.toString();
        let list = map.get(key) ? map.get(key) : new Array();
        list.push(str);
        map.set(key, list);
    }
    return Array.from(map.values());
};