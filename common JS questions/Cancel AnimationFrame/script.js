const div = document.createElement('div');
let tog = true;
div.textContent = 'hello';
div.style.color = 'red';
div.style.position = 'absolute';
div.style.left = '50px';
div.x = 50;
div.addEventListener('click',stopper)
const topEle = document.querySelector('.top');
topEle.append(div);

let myAni = requestAnimationFrame(mover);

function stopper(){
    if(tog){
    cancelAnimationFrame(myAni);
    tog = false
    }else{
        tog = true;
        myAni = requestAnimationFrame(mover);
    }
}
function mover(){
    div.x = div.x + 1;
    div.style.left = div.x + 'px';
    myAni = requestAnimationFrame(mover)
}