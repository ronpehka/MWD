const people = ["Ron","John","Lolo","Po"];
const val1 = people.splice(2,1,"Jane","Joe","Dave","Flin");

console.log(people);
console.log(val1[0]);
const val2 = people.splice(0,1);
console.log(val2);
console.log(people);

const people1 = people.concat(val2,val1,val1,val1);
console.log(people1);

const people2 = people.slice(2,4);
console.log(people2);
const people3 = people.toString();
console.log(people3);