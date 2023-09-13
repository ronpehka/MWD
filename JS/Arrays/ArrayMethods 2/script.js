const people = ["Ron", "Pehka","Linda","Laura"];
const last = people.pop();
people.push("Jane");

const first = people.shift();
const two = people[1];
people.unshift("Joe");


console.log(people);
console.log(last);
console.log(first);
console.log(two);