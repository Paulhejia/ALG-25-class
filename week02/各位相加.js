// 递归

var addDigits = function(num) {  
    let sum = 0;  
    while(num != 0) {
        sum += num % 10;
		console.log("sum:", sum)
        num =  parseInt(num/10);
    }
	console.log(num);
    if(sum >= 10) {
        return addDigits(sum);
    }
    else {
        return sum;
    }
}

// 数学知识 数字根 ，至于为什么，我也不知道，当它是个公式好了
var addDigits = function(num) { 
    return (num - 1) % 9 + 1;
}    