const voteClass = require('./vote-class')
let vote1 = new voteClass()

//生成投票数及节点序号方法的测试
let a = vote1.getVoteNumber()
let b = vote1.getNodeKey()

console.log("voteNumber:"+ a)
console.log("nodeKey:"+ b)

//buffer的测试
let c = vote1.getBuffer()

//取最小值的测试
let d = vote1.arrayMin()
console.log(d)  

