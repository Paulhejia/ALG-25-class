// 肥波拉契

// f5 = f4 + f3 ;

function climbStairs(n) {    
    function dfs(n) {
        if(n <= 1) {
            return 1;
        }
        if(n == 2) {
            return 2;
        }
        return dfs(n - 1) + dfs(n-2);
    }
    return dfs(n);
}    

function climbStairs(n, f1 = 1, f2  = 2) {   
    if(n == 1) {
        return f1;
    }
    return climbStairs(n - 1, f2, f1 + f2)
}    