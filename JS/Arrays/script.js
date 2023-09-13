const myArr = [1,4,5,6,5665,443,434,563,53434,543333434,534343535,23,23];
const myArr1 = myArr.map(function(ele){
    console.log(ele);
    return ele * 2;
});
console.log(myArr1);
const myArr2 = myArr.map((ele)=> ele*2);
console.log(myArr2);


/*const person = ["Mike","John"];
person[2] = "Ron";
person[3] = "Pehka";
person[10] = "Course";
console.log(person);
const person = ["Mike","John","Pehka"];
const people1 = people;
people[2] = "Pehka";
people1[2] = "Jane";
console.log(people);
console.log(people1);

const people2 = [people];
people[2] = "Ron";

const people3 = Array.from(people);
people3[2] = "ron";
console.log(people)
console.log(people3);*/