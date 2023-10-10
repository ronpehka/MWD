
const val1 = 10;

function outerFun(x){
    const val2 = 10;
    function innerFun(){
        return x + val2;
    }
    return innerFun;
}

const val3 = outerFun(15);
console.log(val3());