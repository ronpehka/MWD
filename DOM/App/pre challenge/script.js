const lis = document.querySelectorAll('li');
 
lis.forEach((ele) =>{
  console.log(ele);
  const el1 = document.createElement('span');
  el1.style.backgroundColor = 'red';
  el1.textContent = "After";
  ele.append(el1);
  const el2 = document.createElement('span');
  el2.style.backgroundColor = 'blue';
  el2.textContent = "Before";
  ele.prepend(el2);
})