let counter = 0;

$('li').click(function(e){
    counter++;
    $(this).css('color','purple');
    $(this).before(`BEFORE ${counter}`);
    $(this).after(`AFTER ${counter}`);
    $(this).prepend(`PREPEND ${counter}`);
    $(this).append(`APPEND ${counter}`);
})