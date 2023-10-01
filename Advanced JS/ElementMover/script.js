const output = document.querySelector('.output');
const pos = {x:100, y:100, speed:10}
initSetup();
document.addEventListener('keydown', moveMe);
function moveMe(e){
    console.log(e.key);
    if(e.key === 'ArrowLeft'){pos.x-=pos.speed;}
    if(e.key === 'ArrowRight'){pos.x+=pos.speed;}
    if(e.key === 'ArrowUp'){pos.y-=pos.speed;}
    if(e.key === 'ArrowDown'){pos.y+=pos.speed;}
    if(e.key === 'c'){
        output.style.backgroundColor = randomColor();
    }
    mover();
}
function randomColor(){
    return '#'+Math.random().toString(16).substr(-6);
}
function initSetup(){
output.style.height = '100px';
output.style.width = '100px';
output.style.position = 'absolute';
output.style.backgroundColor = 'red';
mover();}
function mover(){
    output.style.top = pos.y + 'px';
    output.style.left = pos.x + 'px';

}