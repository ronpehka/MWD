const val = "https://dummyimage.com/?utm_content=cmp-true600x400/000/fff&text=dummy";
const imgs = document.querySelectorAll('img');
imgs.forEach((ele)=>{
    let val1 = (ele.hasAttribute('class')) ? 'Dummy' : 'JavaScript';
    if(val1 == 'Dummy'){
        val1 = ele.getAttribute('class');
    }
    ele.setAttribute('src', val + + val1);

})
const urls = document.querySelectorAll('a');
urls.forEach((ele)=>{
    console.log(ele.getAttribute('href'));
    ele.setAttribute('href', 'https://www.fiba.basketball/basketballworldcup/2023/groups');
    ele.setAttribute('target','_blank');

}
)