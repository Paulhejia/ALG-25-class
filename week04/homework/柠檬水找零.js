/*

复杂度分析

时间复杂度：O(N)，其中 N 是 bills 的长度。

空间复杂度：O(1)

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

