let val1 = funDec(100);
console.log(val1)

function funDec(a){
    return a*a;
}
const funExp = function(a){
    return a*a;
}
let val2 = funExp(100)
console.log(val2);
let val3 = function(num){ return num + 5;}
function val4(num){ return num + 5;}
console.log(val3(10));
console.log(val4(10));