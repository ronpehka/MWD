const ul = document.querySelector('ul.myList');
const lis = ul.querySelectorAll('li');
const btn = document.createElement('button');
let counter = lis.length;
btn.textContent = 'Click Me';
document.body.append(btn);
btn.addEventListener('click', (e) => {
    counter++;
    const li = document.createElement('li');
    li.acter = 0;
    li.textContent = `Value (${counter}) ${li.acter} - `;
    li.addEventListener('click', updateItem);
    ul.append(li);
})

lis.forEach((li) => {
    console.log(li);
    li.acter = 0;
    li.addEventListener('click', updateItem);
})

function updateItem(e) {
    const ele = e.target;
    console.dir(ele);
    ele.acter++;
    console.log(ele.acter);
    let temp = ele.textContent;
    ele.textContent = `${temp} ${ele.acter}`;
    ele.classList.toggle('active');
    console.log(ele.classList.contains('active'));

}