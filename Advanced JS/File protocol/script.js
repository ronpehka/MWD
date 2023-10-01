
const message = document.querySelector('#message');
const txt = document.querySelector('textarea');
const btn = document.querySelector('button');
btn.addEventListener('click', (e)=>{
    console.log(txt.value);
    localStorage.setItem('myKey',txt.value);
})
if(localStorage.getItem('myKey')){
    message.textContent = localStorage.getItem('myKey');
}
//localStorage.clear();