let val = 100;
let message = (val > 100) ?  `${val} was greater than 100` :  `${val} was less or equal to 100`;
console.log(message);

let check = (val %2) ? "odd" : "even";
check += `${val} is ${check}`;
console.log(check);
