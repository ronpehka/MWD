/*const ul = document.querySelector('li');
console.log(ul.childNodes);
console.log(ul.parentElement);
console.log(ul.parentNode);*/

const message = document.querySelector('#message');
console.log(message);
message.style.textAlign = "center";
message.style.color="red";
message.style.backgroundColor = "black";
message.style.fontSize = "2em";
message.style.borderBottom = "5px dotted purple"
const highlights = document.querySelectorAll('.highlight');
highlights.forEach((ele)=>{
    console.log(ele);
    ele.style.backgroundColor = "yellow";
    ele.style.fontWeight = "bold";
})
