const headingELE = document.querySelector('h1');
console.log(headingELE);
headingELE.classList.add('red');
const highlights = document.querySelectorAll('.highlight');
highlights.forEach((el,ind)=>{
    console.log(el);
    el.classList.add('red','blue','some_class');
    el.classList.toggle('red', ind<3);
    console.log(el.classList.contains('red'));
    //el.classList.replace('highlight','blue');
})

const ul = document.querySelector('ul');
console.log(ul.children);
const val1 = ul.children;
const val2 = ul.childNodes;
console.log(val1);
console.log(val2);
val2.forEach((el) =>{
    console.log(el);
})
for(let x = 0; x < val1.length; x++){
    let el = val1[x];
    console.log(el);
}

const first = ul.firstElementChild;
const last = ul.lastElementChild;
first.textContent = "First";
last.textContent = "Last";
first.classList.add("blue ")
last.classList.add("red")