//$('.main li').css('color','green');

const vals = document.querySelectorAll('.main li');
vals.forEach((ele)=>{
    ele.style.color='green';
})

$('#first').html('WORKS JQUERY');