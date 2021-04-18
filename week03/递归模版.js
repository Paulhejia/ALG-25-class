// js
function recursion(level, param1, ...) {
    // recursion terminator 终结
    if(level > Max_LEVEL) 
        // process_result
        return ;
    
    // process current logic 处理当前逻辑
    process(level, param);    

    // drill down 向下展开
    recur(level: level + 1);

    // restore current status
}

// java
public void recur( int level, int param ) {
    // terminator
    if(xxx) {
        return ;
    }
    // process current logic
    process();
    // drill down 向下展开
    // restore current status
}

// terminator
// process current logic
// drill down 
// restore current status 

// terminator
// process current logic
// drill down
// restore current status