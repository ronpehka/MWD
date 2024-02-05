const url = 'https://randomuser.me/api?results=100';
$('h1').text('Click me').click(function(e){
  $.get(url, function(data){
    console.log(data.results);
    let html;
    $.each(data.results,function(key,val){
      console.log(val.name);
      html += `${val.name.title} ${val.name.first} ${val.name.last} <br>`
    })
    $('.output').html(html);
  })
});

$('h2').text('Click Me!!!!').click(function(e) {
  let html = '';
  $('li').each(function(){
    html += `${$(this).text()} <br>`
  })
  $('.output').html(html);
});


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

