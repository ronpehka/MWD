$('h2').css({
  height: '100px',
  width: '100px',
  position: 'relative',
  border: '1px solid red',
  background: 'red',
  padding: '20px'
}).text('MOVER');
$('h2').on({
  mouseenter : function(e){$(this).css({background:'blue'})},
  mouseleave : function(e){$(this).css({background:'red'})},
  click : function(e){$(this).css({left:'0px',top:'0px'})},
})
$('body').keypress(function(e){
  if(e.key === 'd'){$('h2').animate({left: '+=50px'},500)};
  if(e.key === 'w'){$('h2').animate({top: '-=50px'},500)};
  if(e.key === 's'){$('h2').animate({top: '+=50px'},500)};
  if(e.key === 'a'){$('h2').animate({left: '-=50px'},500)};

})



