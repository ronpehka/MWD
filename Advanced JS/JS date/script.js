//let d = new Date();
console.log(d);
d = new Date(2050,5,13);
console.log(d);
console.log(d.getDate());
let today = Date.now();
let day = 24*60*60*1000;
let days = 7;
let d = new Date(today*(days * day));
