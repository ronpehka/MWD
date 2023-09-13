const highlights = document.querySelectorAll('.highlight');
console.log(highlights);
highlights.forEach((el)=>{
    el.style.backgroundColor = "yellow";
    el.style.fontSize = "2em";
    el.style.border = "1px solid black";
    el.style.padding = "5px";
    el.style.display = "inline-block";
    el.addEventListener('click', (e)=>{
        console.log(e.target);
        console.log(el);
        console.log(e);
        el.classList.toggle('blue')
    });
    el.addEventListener('mouseenter', (e) =>{
        el.style.backgroundColor = "red";
    })
    el.addEventListener('mouseleave', (e) =>{
        el.style.backgroundColor = "yellow";
    })
    el.addEventListener('mousedown', (e) =>{
        el.style.backgroundColor = "purple";
    })
    el.addEventListener('mouseup', (e) =>{
        el.style.backgroundColor = "green";
    })
}); 

const message = document.querySelector('#message');
message.addEventListener('click', (e) =>{
    console.log('clicked');
})