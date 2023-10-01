const output = document.createElement('div');
const message = document.createElement('div');
message.textContent = 'Output';
const btn = document.createElement('button');
btn.textContent = 'Click me';
document.body.prepend(output);
output.append(message);
output.append(btn);
let counter = 0;

let val1 = 5;

(true) && (true) &&fun();

function fun(){
    val1++;
    console.log(val1);
}




btn.onclick = ()=>{
    counter++;
    message.textContent = counter;
   const ele = (counter%3==0) && adder( `${counter}: ${counter%3}`);
   console.log(ele);
   (ele) && updater(ele,'red');
    /*
    if(counter%3==0){

        let html = `${counter}: ${counter%3}`;
        const ele = adder(html);
    }*/
}
function updater(ele,cl){
    ele.style.color = cl;
}
function adder(){
    const div = document.createElement('div');
    div.textContent = `${counter} : ${counter%3}`;
    return output.appendChild(div);
}