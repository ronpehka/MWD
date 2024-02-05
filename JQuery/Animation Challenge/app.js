const url = 'https://randomuser.me/api?results=100';
$('h1').text('click me').click(function (e) {
  console.log(e);
  $.get(url, function (response) {
    console.log(response);
  })
})
$('input[name="first"]').val('Ron');
$('h2').text('load page').click(function (e) {
  $('.output').load('/test.html');
})
$('#myForm').submit(function (e) {
  e.preventDefault();
  const myData = $(this).serialize();
  $.post('https://www.discoveryvip.com/posttest.php', myData).done(function (data) {
    console.log(data);
  })
  console.log(myData);
});