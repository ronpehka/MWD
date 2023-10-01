const people = ['Ron','Jane','John','Joe','Jack','Jack'];
console.log(people);
for(let i = 0; i < 10; i++){
    people.push('Ron');
}
const people1 = people;

const newPeople = [...new Set(people)];
console.log(newPeople);
newPeople.push('Mike');
console.log(people);
console.log(newPeople);
console.log(people1);

const people2 = people.filter((item,i)=>{
    return people.indexOf(item)===i})