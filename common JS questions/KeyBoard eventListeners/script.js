const output = document.createElement('div');
const message = document.createElement('div');
const btn = document.createElement('button');
document.body.append(output);
document.body.append(message);
output.append(btn);
btn.textContent = 'Click to add input';
btn.style.backgroundColor = 'red';
btn.style.color = 'white';
btn.style.padding = '10px';
btn.addEventListener('click', maker);
maker();

function maker(){
  const tempDiv = document.createElement('div');
  const newInput = document.createElement('input');
  output.append(tempDiv);
  tempDiv.append(newInput);
  newInput.value = 'test';
  newInput.hiddenValue = Math.random().toString(16).substr(-6);
  newInput.style.backgroundColor = '#' + newInput.hiddenValue;
  newInput.focus();
  newInput.addEventListener('keyup',log);
  newInput.addEventListener('keypress',log);
  newInput.addEventListener('keydown',function(e){
    console.log(e.keyCode);
    if(e.keyCode == 13){
      message.innerHTML += `<div style="background:#${newInput.hiddenValue}">
      ${newInput.value}
      </div>`;
      
    }
  });
}

function log(event){
  console.log(event);
}