function generateParenthesis(n){
    if(list[n]){
        return list[n]
    }
    list[0] = [''];
    list[1] = ['()']
    if(n==0 || n==1){
        
        return list[n];
    }
    var result = [];
    for(let i = 0; i<=n-1; i++){ //最后一对括号的 需要括的括号数目
        let preF = list(i);
        let aftF = list(n-1-i);
        for(let k=0;k<preF.length;k++){
            let currentPre = '('+preF[k]+')';                
            for(let j=0; j<aftF.length; j++){ //括了i个括号后，剩余n-1-i个括号需要组合
                result.push(currentPre+aftF[j]);
            }
        }           
    }
    list[n] = result;
    return list[n];
}