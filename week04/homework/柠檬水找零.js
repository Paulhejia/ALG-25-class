/*

复杂度分析

时间复杂度：O(N)，其中 N 是 bills 的长度。

空间复杂度：O(1)

  /*
     集体思路：作为摊主 面对每一位顾客给的钱 只会有三种情况
     当收5元  five++
     当收10元 ten++ five--
     当收20元
        1. 若有10元：ten-- + five--（优先使用这种方式找零）
        2. 若无10元：five-=3
     先计算 后判断：最终判断 five 是否还有 若无再无法找零了
*/
var lemonadeChange = function(bills) {
    let ten = 0, five = 0;
    for(const bill of bills) {
        if(bill == 5) {
            five++;
        }
        else if(bill == 10) {
            if(five == 0) {
                return false;
            }
            five--;
            ten++;
        }
        else {
            if(five > 0 && ten > 0) {
                five--;
                ten--;
            }
            else if(five >= 3)  {
                five -= 3;
            }
            else {
                return false;
            }
        }
    } 
    return true;
}    

