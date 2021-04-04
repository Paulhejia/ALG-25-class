
/* 
    66. 加一 
*/
var plusOne = function (digits) {
	const len = digits.length;
	for(var i = len - 1; i < len ; i--) {
		digits[i]++;
		if(digits[i] % 10 == 0) {
			digits[i] = 0;
		}
		else {
			return digits;
        }
		
	}
	return digits;
}
plusOne([1,3,4]);
plusOne([9,9,9]);

// time: O(N)
// space: O(1);
