const url = 'https://randomuser.me/api/?results=100';
const btn = document.querySelector('button');
const output = document.querySelector('.output');

btn.addEventListener('click', (e)=>{
    fetch(url).then((response) => response.json())
    .then((data)=>{
        console.log(data.results);
        output.innerHTML = '';
        data.results.forEach(element => {
            console.log(element);
            output.innerHTML += `${element.name.title} ${element.name.first} ${element.name.last}<br>`
        });
    })
})