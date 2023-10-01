const people = ['Ron','John','Nele'];
people[20] = 'Jack';
const arr1 = people.map(item=>{
    if(item != null)return item;
    
});
const arr2 = people.filter(Boolean);
const arr3 = people.filter((item)=>{
    return item != null;
})
const arr4 = people.filter(String);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);