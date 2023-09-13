const myObj = {first: "Laurence", last:"Sveskis", age:30};

for(let prop in myObj){
    console.log(prop);
    console.log(myObj[prop]);
}




/*for(let x = 0; x < 5 ; x++){
    console.log(x)
}

let y = 0;
while(y < 10){
    console.log(y);
    y++;
}
let z = 0;
do{
    console.log(z);
    z++;
}while(z<6);
const array1 = ['a','ab','c','d','e'];
for(let x = 0; x<array1.length; x++){
    console.log(array1[x]);
}

array1.forEach(function(ele,index,arr){
    console.log(ele);
    console.log(array1[index]);
    console.log(arr[index]);
});

array1.forEach((ele)=>console.log(ele));
for(ele in array1){
    console.log(array1[x]);
}*/