/*const message = document.getElementById('message');
console.log(message);
const listItems = document.getElementsByTagName('li');
console.log(listItems);
const highlights = document.getElementsByClassName('highlight');
console.log(highlights);

const val1 = document.querySelector('li');
console.log(val1);
const val2 = document.querySelector('#message');
console.log(val2);
const val3 = document.querySelector('.highlight');
console.log(val3);*/
const val1 = document.querySelectorAll('li');
console.log(val1);
const val3 = document.querySelectorAll('.highlight');
console.log(val3);
for(let x = 0; x <val3.length; x++){
    console.log(val3[x]);
    val3[x].textContent = `UPDATED ${x}`;
}
for(let x = 0; x < val1.length; x++){
    console.log(val1);
    val1[x].textContent = `${x+1} ListItem(${x})`;
}