// 1 位树
// fn = fn(i-1) + fn(i-2);
/*
一次使用一个字符
    边界调节 ， S(i-1) != 0
一次使用两个字符
    边界调节 ， S(i-2) != 0
    S(i-2) * 10 + S(i-1) <= 26
 */
var numDecodings = function(s) {
        const n = s.length;
        const f = new Array(n + 1).fill(0);
        f[0] = 1;
        for(let i = 0; i <= n; i++ ) {
            if(s[i - 1] !== '0') {
                f[i] += f[i - 1];
            }
            if(i > 1 && s[i - 2] != '0' 
                && (s[i - 2] * 10 + (s[i - 1] - '0')) <= 26
            ) {
                f[i] += f[i - 2 ];
            }
        }
        return f[n];
}    

var numDecodings = function(s) {
    const n = s.length;
    const f = new Array(n + 1).fill(0);
    f[0] = 1;
    for(let i = 0; i < n + 1; i++) {
        if(s[i] !== '0') {
            f[i] += f[i - 1];
        }
        if( i > 1 && s[i - 1] != '0' 
            && s[i-2] * 10 + (s[i - 1] - '0') <= 26) {
                f[i] += f[i - 2];
        }
    }
    return f[n];
}
