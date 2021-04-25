var findContentChildren = function(g, s) {
    let r = 0, i = g.length, j = s.length
    g.sort((a, b) => b - a) // 孩子也降序
    s.sort((a, b) => b - a)
    while (i--) {
        if (j === -1) break // 饼干指针到头
        while (j--) // 排除最小饼干
            if (s[j] >= g[i]) {
                r++
                break
            }
    }
    return r
};