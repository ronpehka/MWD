const li = document.createElement('li');
let x = 1;
li.style.backgroundColor = "yellow";
li.style.textTransform = "Uppercase";
li.textContent = `Hello I'm number ${x}`;
const ul = document.querySelector('ul');
ul.appendChild(li);
while(x < 10 ){
    fun('#' + Math.random().toString(16).substr(-6));
}
function fun(bg){
    let dup = li.cloneNode(true);
    console.log(dup);
    x++;
    dup.style.backgroundColor = bg;
    dup.textContent = `Hello I'm number ${x}`;
    ul.appendChild(dup);
}