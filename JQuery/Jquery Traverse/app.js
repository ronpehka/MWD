$('li').click(function(e){
  console.log($(this).parents());
  $.each($(this).parents(), function(key,val){
    //console.log(val)
  })
  $(this).parent().toggleClass('red');
})

$('.main').click(function(e){
  console.log($(this).children());
  $.each($(this).children(),function(key){
    $(this).text('new text '+key+1);
  })
})