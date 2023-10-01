const main = document.querySelector('.main');
const ul = document.createElement('ul');
const input1 = document.createElement('input');
const button = document.createElement('button');
button.textContent = 'Add Item';
main.prepend(input1);
main.append(button);

main.append(ul);
button.addEventListener('mouseover', ()=>{
    button.style.backgroundColor = 'red';

})
button.addEventListener('mouseout', ()=>{
    button.style.backgroundColor = 'gray';
    
})
input1.addEventListener('focus', (e)=>{
    input1.style.backgroundColor = 'red';
    input1.style.color='white';
})
input1.addEventListener('blur', (e)=>{
    input1.style.backgroundColor = 'white';
    input1.style.color='black';
})
const myStuff = ["Bananas","Apples","Oranges"];
myStuff.forEach((el,ind)=>{
    createItem(myStuff[ind]);
})
button.addEventListener('click', (e)=>{
    console.log(input1.value);
    createItem(input1.value);
    input1.value = "";
})
function createItem(val){
    console.log(val);
    const ele = document.createElement('li');
    ele.textContent = val;
    ele.style.fontSize = '3em';
    const span = document.createElement('span');
    span.textContent = ' X ';
    span.style.color = 'red';
    ele.append(span);
    span.addEventListener('click', (e) =>{
        ele.remove();
    })
    span.addEventListener('mouseover', (e) => {
        span.style.cursor = 'grab';
    })
    span.addEventListener('mouseout', (e) => {
        span.style.cursor = 'pointer';
    })


    ul.append(ele);

}