const person = {first:"Ron" };
person.last = "Pehka";
person.age = 40;
person.helpful = true;
console.log(person);
person["first"] = "Lisa";
let val = "first";
person[val] = "Mike";
let count = 1;
person.count1 = "one";
person.count2 = "two";
console.log(person["count" + count])