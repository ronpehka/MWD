const message = document.querySelector('#message');
let counter = 10;
const nCount = window.setInterval(blastOff,100);
//const intVal = window.setInterval(output,100);
//const setVal = window.setTimeout(output1,500,"Hello WorlD");
const btn = document.querySelector('button');
btn.addEventListener('click', (e)=>{
   // clearInterval(intVal);
})
function blastOff(){
    counter--;
    if(counter <= 0){ message.textContent = `BLAST OFF`;
    clearInterval(nCount);}
    else{
    message.textContent = `Update ${counter}`;
    }
}
function output1(mes){
    message.textContent = `Update ${mes}`;
}

function output(){
    counter++;
    message.style.backgroundColor = 'red';
    message.textContent = `DONE! ${counter}`;
}