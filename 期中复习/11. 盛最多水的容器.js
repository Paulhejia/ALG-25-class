// 两边假逼
// 若向内移动短板，水槽的短板 min(h[i], h[j])min(h[i],h[j]) 可能变大，因此水槽面积 S(i, j)S(i,j) 可能增大。
// 若向内移动长板，水槽的短板 min(h[i], h[j])min(h[i],h[j]) 不变或变小，下个水槽的面积一定小于当前水槽面积。

var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let res = Math.min(height[i], height[j]) * (j - i);
    while(i < j) {
        if(height[i] < height[j]) {
            i++;
        }
        else {
            j++;
        }
        return Math.max(res, Math.min(height[i], height[j]) * (j - i));
    }
    return res;
}    