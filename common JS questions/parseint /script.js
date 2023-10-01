const btn = document.querySelector('button');
const answer = document.querySelector('input');
const message = document.querySelector('.message')
btn.addEventListener('click', function(){
    console.log(answer.value);
    let ans = parseInt(answer.value());
    console.log(typeof(ans));
    if(!Number(ans)){
        console.log('not a number')
    }else{
        console.log('ok');
        
        message.textContent = checkTimeofDay(ans);
    }

})
outputToday();
function outputToday(){
    const today = new Date().getDay();
    let weekStatus = 'Unknown';
    let dayName = 'unknown';
    switch(today){
        case 0: dayName = 'Sunday';break;
        case 1: dayName = 'Monday';break;
        case 2: dayName = 'Tuesday';break;
        case 3: dayName = 'Wedneseday';break;
        case 4: dayName = 'Thursday';break;
        case 5: dayName = 'Friday';break;
        case 6: dayName = 'Saturday';break;
    }
    switch(dayName){
        case 'Thursday' : weekStatus = 'end of Week';
        case 'Friday' : weekStatus = 'end of Week';
        case 'Saturday' : weekStatus = 'end of Week';
        case 'Sunday' : weekStatus = 'end of Week';break;
        default:
            weekStatus = 'beginning of the week';
    }
    message.textContent = `Today is a ${dayName} its the ${weekStatus}`;
}

function checkTimeofDay(num) {
    switch (num < 12) {
    case true:
      return 'Good Morning'; break;
    case false:
      return 'Good Afternoon';
      break;
    default:
      return 'something went wrong';
    }
  };