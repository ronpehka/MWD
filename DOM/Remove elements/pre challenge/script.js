const lis = document.querySelectorAll('li');
lis[2].remove();

const ul = document.querySelector('ul');
const removedItem = ul.removeChild(lis[1]);
console.log(removedItem);
console.log(lis);
console.log(ul);
lis.forEach((el)=>{
  console.log(el);
})

const li1 = document.createElement('li');
li1.textContent = "FIVE";
ul.append(li1);
li1.textContent = "Six";
ul.prepend(li1);



const lis2 = document.querySelectorAll('li');
console.log(lis2);