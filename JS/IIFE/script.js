let val = '1000';

(function(){
    console.log("Hello");
    let val = '100';
})();

let result = (function(){
    let val = 'Ron';
    return val;
})();
console.log(result);

console.log(val);
(function(val){
    console.log(`My name is ${val} `);
})("Ron");