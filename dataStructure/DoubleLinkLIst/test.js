const DoubleLinkList  = require("./index");

const doubleLinkList = new DoubleLinkList();

// append() 测试
doubleLinkList.append("ZZ");
doubleLinkList.append("XX");
doubleLinkList.append("CC");
console.log(doubleLinkList);

// insert() 测试
doubleLinkList.insert(0, "00");
doubleLinkList.insert(2, "22");
console.log(doubleLinkList);

// getData() 测试
console.log(doubleLinkList.getData(1)); //--> ZZ

// indexOf() 测试
console.log(doubleLinkList.indexOf("XX")); //--> 3
console.log(doubleLinkList);