const val1 = document.querySelector('.tester');
console.log(val1);
val1.style.marginBottom =  "200px";
const divs = val1.querySelectorAll('div');
console.log(divs);


divs.forEach((element,index) => {
    element.style.border = '1px solid black';
    element.style.width = "100px";
    element.style.height = "40px";
    element.style.padding = "10px";
    element.id = (index + 1);
    element.addEventListener('click',bubble,false);
    element.addEventListener('click', capture,  true);
});

function bubble(){
    console.log('Bubble ' + this.id);
}
function capture(){
    console.log('Capture ' + this.id);
}

const messages = document.querySelector('input[name="message"]');
//console.log(message);
let tog = false;
messages.addEventListener('blur',(el)=>{
  console.log('focus out');
  if(!tog){
  messages.style.color= "black";
  }
  tog=false;
});
messages.addEventListener('focus',()=>{
  console.log('focus');
  messages.style.color= "blue";
});
messages.addEventListener('change',()=>{
  console.log('changed');
  messages.style.color= "red";
  tog=true;
});