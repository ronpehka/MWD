const btn = document.querySelector('#btn');
const output = document.querySelector('.container');
const url = 'temp1.json';
console.log(btn);
btn.onclick = ()=>{
  console.log('clicked');
  fetch(url)
  .then(res => res.json())
  .then(data=>{
    console.log(data);
    addData(data);
  })
}
function addData(data){
  let html = '<h1>Results</h1>';
  data.forEach(person => {
    console.log(person)
    html += `<div>${person.first} ${person.last} ${person.id}</div>`;
  });
  output.innerHTML = html;

}
