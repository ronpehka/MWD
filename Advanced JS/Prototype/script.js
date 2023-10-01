function Person(first, last){
    this.firstName = first;
    this.lastName = last;
  //  console.log(this);
}

Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}
Date.prototype.addDays = function(days){
    return new Date(this.valueOf() + (days * 24*60*60*1000));
}
const val = new Person("RON","PEHKA")
console.log(new Date().addDays(7));
console.log(val)