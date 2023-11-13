$('li').click(function(){
    $(this).toggleClass('red');
})

$('h1').click(function(e){
    $('li').removeClass('red');
})