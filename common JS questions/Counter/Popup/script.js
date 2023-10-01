const output = document.querySelector('h1');
output.textContent =  'Counter';

let reqVal = requestAnimationFrame(step);
let start;
function step(cnt){
  console.log(cnt);
  if(start==undefined){
    start = cnt;
  }
  const val = Math.floor(cnt - start);
  const str = String(val);
  console.log(str[0]);
  const mil = str.slice(1,4);
  console.log(mil);
  console.log(val);
  output.textContent = `${str[0]} : ${mil}`
  if(val < 5000){
    reqVal = requestAnimationFrame(step);
  }
}