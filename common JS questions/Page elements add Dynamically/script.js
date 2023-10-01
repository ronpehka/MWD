const btn = document.createElement('button');
const output = document.createElement('div');
const message = document.createElement('div');
btn.textContent = 'Click me';
message.textContent = 'Hello World!';
document.body.append(output);
output.append(message);
output.append(btn);


btn.addEventListener('click', ()=>{
  const today = new Date();
  message.textContent = `${today.getHours()}:${today.getMinutes()}`;
})