/*let myStr = "Hello";
let myNum = 100;
myStr = myStr + myStr;
//coercion

console.log(myStr)
console.log(typeof(myStr));
console.log(typeof(myNum));*/
/*let message = prompt('Your number?');
message = Number(message);
let output = message + message;
console.log(output);
console.log(typeof(message));*/
/*let val1 = 5;
let val2 = 7;
let val3 = 9;
console.log(val1 + val2)
console.log(val1 * val2)
let val = 40;
val*=5;*/
let age = prompt('How old are you?');
age = Number(age);
if (!age) {
  age = prompt('Enter a Number?');
}
let message;
if (age >= 21) {
  message = `You are ${age} and allowed to come in and drink.`;
}
else if (age >= 18) {
  message = `You are ${age} and allowed to come in but NOT drink.`;
}
else {
  message = `You are NOT allowed in.  Sorry you are only ${age}`;
}
document.getElementById('message').innerHTML = message;