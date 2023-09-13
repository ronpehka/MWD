console.log(Math.PI);
console.log(Math.ceil(5.7));
console.log(Math.floor(5.7));
console.log(Math.round(5.7));
console.log(Math.floor(Math.random()*11));

console.log(Math.floor(Math.random()*10)+1);

function randomNum (min,max){
    for(x= 0; x <=100; x++){
        //console.log(x);
        console.log(Math.floor(Math.random()*(max-min+1)))+min;
    }
}
randomNum();