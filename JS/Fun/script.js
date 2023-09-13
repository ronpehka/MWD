/*let val = "test";
let num = 0;

function test1(){
    num++;
    console.log(val,num);
}
console.log(val,num);
test1();
console.log(val,num);
test1();*/
/*let a = 5;
let b = 10;
let total = 0;
function add(val1=1, val2=1){
    val2 = val2 || 1;
    total+=val1;
    console.log(val1);
    console.log(total);
}
add();
add(50);
add(20,20);*/

function adder(a,b){
    console.log(a,b);
    let total = a*b;
    return total;
}
let val1 = adder(4,10);
console.log(val1);
function subtract(a,b){
    let total = a-b;
    return total;
}
function add(a,b){
    let total = a+b;
    return total;
}
function divide(a,b){
    let total = a/b;
    return total;
}
function multiply(a,b){
    let total = a*b;
    return total;
}
console.log(multiply(2,5));
console.log(divide(2,5));
console.log(add(2,5));
console.log(subtract(2,5));
