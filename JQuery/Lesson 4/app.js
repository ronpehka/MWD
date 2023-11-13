/*$(document).ready(()=>{
$('h1').html('HELLO');
})

document.addEventListener('DOMContetLoaded', (e)=>{
    console.log('DOMContentLoaded');
})*/

$('h2').html('click <b>ME</b>');
$('h1').text('click <b>ME</b>');
$('h2').click((e)=>{
    $('li').toggle();
   //$('.main li').show()
})
$('h1').click((e)=>{
    // $('li').toggle();
    $('.main li').hide()
 })