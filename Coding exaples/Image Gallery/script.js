const output = document.querySelector('.output');
const images = ['1.jpg','2.jpg','3.jpg','5.jpg'];
for(let x =0; x<4;x++){
    const el = document.createElement('div');
    output.append(el);
    cGallery(el);
}
cGallery(output);

function cGallery(parentEle){
    let curInd = 0;
    const gallery = document.createElement('div');
    const curImage = document.createElement('img');
    curImage.setAttribute('src','1.jpg');
    const btn1 = document.createElement('button');
    btn1.textContent = 'Next';
    const btn2 = document.createElement('button');
    btn2.textContent = 'Previous';
    parentEle.append(gallery);
    gallery.append(curImage);
    gallery.append(btn2);
    gallery.append(btn1);
    btn2.addEventListener('click',()=>{
        curInd--;
        if(curInd <0){
            curInd = images.length -1;
        }
        curImage.src = images[curInd];
    })
    btn1.addEventListener('click',()=>{
        curInd++;
        if(curInd >= images.length){
            curInd = 0
        }
        curImage.src = images[curInd];
    })

}