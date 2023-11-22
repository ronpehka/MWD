$('.main li').click(function(){
    $(this).hide('slow',success('hide'));
})
$('h1').click(function(){
    $('.main li').show(1000,success('show'));
})
$('h2').click(function(){
    $('.main li').toggle();
})

function success(output){
    $('h1').text(output);
}