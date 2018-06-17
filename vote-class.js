`strict mode`
class voteClass {
        constructor (){
           this.voteNumber = ``
           this.nodeKey = ``
           this.voteNode ()               
        }

    voteNode() { //随机数的方法函数 
        var _idx = 1
        var str = ''  
        for (var i = 0; i < _idx; i += 1) {  
            str += Math.random()    
        }  
        this.voteNumber = Math.floor(str * 100000000) / 100000000
        this.nodeKey = Math.random().toString().slice(-4)
    }    
    getVoteNumber() {
        return this.voteNumber
    }
    getNodeKey() {
        return this.nodeKey
    }

    getBuffer(){
    const buf1 = Buffer.from(`0571      0.28146981`)
    const buf2 = Buffer.from(`5322      0.69726856`)
    const buf3 = Buffer.from(`2137      0.19104486`)
    const buf4 = Buffer.from(`3109      0.23197665`)
    //const buf_all = Buffer.concat([buf1,buf2,buf3,buf4])
    //console.log([buf1,buf2,buf3,buf4])
    console.log(`nodekey   voteNumber`)
    console.log(buf1.toString())
    console.log(buf2.toString())
    console.log(buf3.toString())
    console.log(buf4.toString())
    }
}

module.exports = voteClass
