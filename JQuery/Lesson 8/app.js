$('li').click(function(e){
    //$(this).remove();
    $(this).empty();
})



/*let cnt = 0;
$('h1').html('Make element').click(function(e){
    console.log('clicked');
    cnt++;
    const val1 = $(`<p>New one ${cnt}</p>`).click(function(e){
        $(this).toggleClass('red');
    });
    const val2 = $(`<span> ${cnt}</span>`).addClass('blue');
    $('li').append(val1,val2,$('h2'));
})
$('li').click(function(e){
    console.log($(this.html));
    console.log($(this.text));
})
$('h1').text('Get input').click(function(e){
    console.log($("input[name='first']").val());
    console.log($("input[name='first']").html())
})*/