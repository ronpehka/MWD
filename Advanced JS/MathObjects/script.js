for(let x = 0; x <= 100; x++){
   console.log(genNum(1,10)); 
}


function genNum(min,max){
    min = Math.ceil(min);
    max =  Math.floor(max);
    return Math.floor(Math.random()*(max-min))+min;
}