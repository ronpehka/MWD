/*let start = 100;
function loop(val){
    console.log(val);
    if(val < 1){
        return;
    }
    loop(val-1);
}

function loop1(val){
    console.log(val);
    if(val > 0){
        val--;
        loop1(val);
    }
    return 'end';
}*/
let secretNum = 5;
let guess;
output(guesser("Guess the number 1-10"));
function guesser(p) {
    let guess = prompt(p);
    guess = Number(guess);
    if(guess == secretNum){
        message = `You got the right number ${guess} `;
        return message;  
    }else{
        message =guess > secretNum ? `was higher, guess again`: ` Was lower, guess again`;
        return guesser (`${guess} ${message}`);
    }
}
function output(mes){
    document.getElementById('message').innerHTML = mes;
}