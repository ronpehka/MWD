$('h1').css({
  position:'relative',
  border:'1px solid red',
  display:'inline-block'
});
$('li').css({
  position:'relative'
}).text('0');
$('h1').css({
  position:'relative'
});
$('h2').text('CLick to Reset').click(function(e){
  $('li').animate({
    left:'0px',
    opacity:'1'
  });
})
$('h1').animate({
  left:'300px',height:'100px', width:'100px'
});
$('li').click(function(e){
  $(this).animate({
    left:'+=200px',
    opacity:'0.5'
  },1000,function(e){
    let val = $(this).text();
    val++;
    console.log(val);
    $(this).text(val);
  });
})
