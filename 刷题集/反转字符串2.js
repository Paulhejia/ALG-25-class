var reverseStr = function(s, k) {
    var a = [...s];
    for(let start = 0; start < a.length; start += 2 * k) {
        let i = start, j = Math.min(start + k - 1, a.length - 1);
        while(i < j) {
            let tmp = a[i];
            a[i++] = a[j];
            a[j--] = tmp;
        }
    }
    return a.join('');
}