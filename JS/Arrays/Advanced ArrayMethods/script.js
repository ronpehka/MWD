const people = ["Ron","John","Lolo","Po"];
people.sort();
people.reverse();
console.log(people);

people.sort(function(a,b){
    return a-b; //b-a reverse numbers
});
console.log(people);
const people2 =people.filter(ele => Number(ele));