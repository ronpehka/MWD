let total=0;

function adder(){
    total++;
}

console.log(cal(5,10));

function cal(a,b){
    let total=0;
    total+=mul(a,b);
    total+=add(a,b);
    total = total+sub(a,b);
    function mul(){return (a*b)}
    function add(){return (a+b)}
    function sub(){return (a-b)}
    return total;
}