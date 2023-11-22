/*$('.main').on('mouseenter','li', function(e){
    $(this).addClass('red');
}).on('mouseleave','li',function(e){
    $(this).removeClass('red');
})*/
/*$('.main li').on({
    mouseenter : function(e){$(this).addClass('red');},
    mouseleave : function(e){$(this).removeClass('red');},
    click : function(e){console.log('clicked')}
})*/
$('input[name="first"]').keydown(function(e){
    let li = $('input[name="first"]').val();
    let str = $(`<li>${li}</li>`);
    if(e.keyCode === 13){
        $('.main ul').append(str)
    }
})
$('.main').on('mouseenter mouseleave','li',function(e){
    console.log(e);
    $(this).toggleClass('red');
   /* if(e.type == 'mouseleave'){
        $(this).removeClass('red');
    }if(e.type == 'mouseenter'){
        $(this).addClass('red');
    }*/
})
/*$('input[name="first"]').keydown(function(e){
    console.log($(this).val().length);
    if(e.keyCode === 13){
        console.log('pressed enter');
        $('h1').text($(this).val());
    }
    if($(this).val().length >= 4){
        $(this).addClass('red');
    }else{
        $(this).removeClass('red');
    }
})*/
