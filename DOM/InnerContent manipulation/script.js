/*const listItems = document.querySelectorAll('li');
console.log(listItems);
listItems.forEach(function(ele,index,list){
    console.log(ele);
    ele.innerHTML = `<a href="#">${ele.textContent}<a>`
    
});*/
const listItems = document.querySelectorAll('li');
console.log(listItems);
listItems.forEach((ele,ind)=>{
    console.log(ele.getAttribute('class'));
    ele.setAttribute('id','listItem'+(ind+1));
    if(!ele.getAttribute('class')){
        ele.setAttribute('class','listy');
    }else{
        ele.textContent += ` has a class element`;
    }
    ele.setAttribute('class','listy');
})
const highlight = document.querySelectorAll('.highlight');
console.log(highlight);