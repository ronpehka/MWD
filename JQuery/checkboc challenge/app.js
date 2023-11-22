

$('input[name="checks"]').click(updateImage);

function updateImage(e){
    console.log('clicked');
    console.log($(this).prop('checked'));
    if($(this).prop('checked')){
        $('img').attr('src','https://dummyimage.com/200x100/0d52ba/fff&text=Checked');
    }else{
        $('img').attr('src','https://dummyimage.com/200x100/0d52ba/fff&text=Not Checked');
    }
}


/*$('ul').eq(1).remove();
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
    
}*/