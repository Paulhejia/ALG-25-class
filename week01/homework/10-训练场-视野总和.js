

/* 
    训练场练习
    视野总和 
*/
// 快慢指针解法
function fieldSum(v) {
    // 快慢指针
    let index = 0;
    let j = 0; // j在前头
    let ans = 0;
    let st = [];
    while(index < v.length - 1 ) {
      const cur = v[index];
      j = index + 1;
      st.push(0);
      while(st.length) {
          if(cur > v[j] ) {
            st.push(j);
            j++
          }
          else {
            ans += st.length -1;            
            st = [];
          }
      }  
      index++;  
    }
    return ans;
  }
  