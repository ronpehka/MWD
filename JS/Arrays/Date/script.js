let today = new Date();
let future = new Date(2025,5,13);
let day = future.getDate();
const months = ['JAnuary', 'Feb', 'March','April','May','June','July','August','Sep','Oct','Nov','Dec']
let month = future.getMonth();
let year = future.getFullYear();
let myDate = `${months[month]} ${day} ${year} `;
document.getElementById('message').innerHTML = myDate;
console.log(future);