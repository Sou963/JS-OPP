//inharetance father and son

class father{
    constructor(){
        console.log("Iam a father constructor!s")
    }
}
class son extends father{
    constructor(){
        super();
        console.log("i am a son constructor!")
    }
}
new son()
