const ele1 = document.createElement('div');
ele1.textContent = 'My new element';
document.body.prepend(ele1);

const output = document.querySelector('.output');
output.innerHTML += '<div>Kätlin</div>';
output.innerHTML += '<div>Hello World</div>';
output.innerHTML += '<div>Hello World</div>';
output.style.border = '1px solid black';

const ele2 = document.createElement('h2');
ele2.innerHTML = 'Ron Pehka';
output.appendChild(ele2);

output.insertAdjacentHTML('beforebegin', '<p>Para1</p>');
output.insertAdjacentHTML('beforeend', '<p>Para2</p>');
output.insertAdjacentHTML('afterbegin', '<p>Para3</p>');
output.insertAdjacentHTML('afterend', '<p>Para4</p>');

const ele4 = document.createElement('h2');
ele4.textContent = "i am a heading";
output.insertAdjacentElement('beforebegin',ele4);
