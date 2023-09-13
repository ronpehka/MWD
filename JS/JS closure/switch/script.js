/*let today = prompt("pick a number");
today = Number();
let output;
switch(today){
    case 0: 
    output = "Sunday";
    break;
    case 1: 
    output = "Monday";
    break;
    case 2: 
    output = "Tuesday";
    break;
    case 3: 
    output = "Wedneseday";
    break;
    case 4: 
    output = "Thursday";
    break;
    case 5: 
    output = "Friday";
    break;
    case 6: 
    output = "Saturday";
    break;
    default:
    output = "Not found";
}*/
let person = prompt("Write a name").toLocaleLowerCase();

let output;
switch(person){
    case "linda":
        output = "Linda is my friend";
    break;
    case "kaitlyn":
        output = "Kaitlyn is my friend"
    break;
    case "ralph":
    output = "Ralph is my friend";
    break;
    case "karl":
    output = "Karl is my friend"
    break;
    default:
    output = "I don't know anyone named " + person;
}
document.getElementById('message').innerHTML =  output;