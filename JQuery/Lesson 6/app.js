let cnt = 0;
$('h1').click(function(){
    cnt++;
    $(`<p>prependTo ${cnt}</p>`).prependTo('li');
    $(`<p>appendTo ${cnt}</p>`).appendTo('li');
    $(`<p>Before ${cnt}</p>`).insertBefore('li');
    $(`<p>After ${cnt}</p>`).insertAfter('li');
})