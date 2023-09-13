const inputs = document.querySelectorAll('input');
const message = document.querySelector('#message');
console.log(inputs);
inputs.forEach((el)=>{
  el.addEventListener('keydown',(e)=>{
    const keyName = e.key;
    console.log(`Down ${keyName}`);
    message.textContent += keyName;
  })
  el.addEventListener('keyup',(e)=>{
    const keyName = e.key;
    console.log(`UP ${keyName}`);
  })
})