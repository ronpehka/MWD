const myArr = ["welcome","JS","Ron","pehka","Idol"];
const message = document.querySelector('#message');
for(let x = 0; x <100; x++){
    let temp = getRandomItem(myArr);
    console.log(temp);
    console.log(temp.index, temp.item)
    message.innerHTML += `${temp.item} <br> ${temp.index}`
}

//document.getElementById('message').innerHTML = getRandomItem(myArr);
function getRandomItem(myArr){

    let randomIndex = Math.floor(Math.random()*myArr.length);

    //const item = myArr[randomIndex];
    return {item : myArr[randomIndex], index : randomIndex};
}