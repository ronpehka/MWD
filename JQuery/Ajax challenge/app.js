$('#myForm').submit(function(e){
  e.preventDefault();
  const myData = $(this).serialize();
  console.log(myData);
  $.ajax({
    url :'https://www.discoveryvip.com/posttest.php',
    type : 'post',
    data : myData,
    success: function(e){
      console.log(myData);
      $('.output').css({border: '1px solid red'}).text('Message sent');
    }
  })
})


/*const url = 'https://randomuser.me/api?results=100';
$('h1').text('click me').click(function (e) {
  console.log(e);
  $.ajax( {
    url: url,
    type: 'get',
    success : success
  })
})
function success(data){
  console.log(data);
}
$('input[name="first"]').val('Laurence');

$('#myForm').submit(function (e) {
  e.preventDefault();
  const myData = $(this).serialize();
  $.ajax({
    url : 'https://www.discoveryvip.com/posttest.php',
    type : `post`,
    data : myData,
    success : success
  })
  console.log(myData);
});*/

