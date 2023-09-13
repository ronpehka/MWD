const person = {};
person["First name"] = "Ron";
person.talking = function(){
    return "I'm talking now";
}
const val = person.talking();
console.log(val);

person.first = "Ron";
person.last = "Pehka";
person.full = function(){
    console.log(this);
    return `${this.first} ${this.last}` 
}
person.welcome = function(personName){
    return `Hello, ${personName}` ;
}
console.log(person.full());
console.log(person.welcome(person.full()));