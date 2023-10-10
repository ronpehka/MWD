
const myArr = ['Ron','Lisa','Joe'];

const output = document.querySelector('.output');
const btn = document.createElement('button');
btn.textContent = 'Add Person'
output.append(btn);
const myInput = document.createElement('input');
myInput.setAttribute('type','text');
myInput.value ='Mike';
output.prepend(myInput);

const ul = document.createElement('ul');
output.append(ul);

btn.addEventListener('click',addPerson);

function addPerson(){
    const newPerson = myInput.value;
    myArr.push(newPerson);
    adder(newPerson);
    console.log(myArr);
}
function adder(person){
        const li = document.createElement('li');
        li.textContent = person;
        ul.append(li);
}
function build(){
    myArr.forEach(e =>{
        adder(e);
    })
}