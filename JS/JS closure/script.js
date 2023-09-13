let val = 1000;

function test(){
    const secret = 12345;
    return function inner(){
        console.log(`Secret is ${secret}`);
    }
}

const output = test();
output();

const secret2 = function(val){
    const names = function(){
        return val;
    }
    return names;
}
let secretVal = secret2('Ron');
console.log(secretVal());