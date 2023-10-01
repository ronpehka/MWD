let val = "JavaScript is great, JavaScript rules";
let val2 = 'Hello World!';
const output = document.querySelector('.output');
output.innerHTML = val.big();
output.innerHTML += val.small();
output.innerHTML += val.fontsize(9);
output.innerHTML += val.bold();
output.innerHTML += val.fontcolor('red');
/*output.innerHTML += val.strike();
output.innerHTML += val.italics();*/
output.innerHTML += `<br> ${val.toUpperCase()}`;
output.innerHTML += `<br> ${val.toLowerCase()}`;

let index = 5;
console.log(val.charAt(index));
console.log(val.concat(' - ',val, val2));
let val3 = val.trim();

let val4 = val.split(' ');
console.log(val4)
console.log(val.slice(5,9));//start pos, end pos
console.log(val.substring(5));//start pos, end pos
console.log(val.substr(5,5));//start pos, length

console.log(val.replaceAll('JavaScript',"HTML"));
console.log(val.includes('JavaScript')); //boolean case sensitive
console.log(val.indexOf('JavaScript'));
let val5 = 1000;
let val6 = val5.toString();
let d = new Date();
let val7 = d.toUTCString();
