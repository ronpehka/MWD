$('ul').eq(1).remove();
$('input').eq(1).remove();
$('h2').remove();

const btn = $('<button>Add</button>').click(addNew);
$("input[name='first']").val("Ron").after(btn);
btn.addClass('red');
const btn2 = $('<button>X</button>').addClass('red');

$('li').append(btn2);
$('ul').on('click','li button.red',rem);

function rem(){
    console.log($(this).parent());
    $(this).parent().remove();
}

function addNew(){
    let btn2 = $('<button>X</button>').addClass('red').click(rem);
    let str = $("input[name='first']").val();
    let li = $(`<li>${str}</li>`).append(btn2);
    $('.main ul').append(li);
    
}