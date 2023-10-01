const ul = document.querySelector('ul');
const myInput = document.querySelector('input[name="myInput"]');

const btn = document.querySelector('button');
let x = 0;
btn.addEventListener('click', (e)=>{
  x++;
  e.target.textContent = 'Clicked '+x;
  addListItem();
})

function addListItem(){

  const lis = document.querySelectorAll('li');
  if(myInput.value.length > 3 && lis.length<5){
  const li = document.createElement('li');
  li.textContent = myInput.value;
  ul.appendChild(li);}
}