const arr1 = ['Ron','Pehka',100,false];
const arr2 = [2232,true,'yolo','Pehka',500,false];

const arr3 = arr1.concat(arr2);

console.log(arr3);

Array.prototype.push.apply(arr1);
console.log(arr2);
console.log(arr1);

arr2.push('New ITem');
arr1.push('Arr1 Item');

//delete arr1[12];
//delete arr2[7];

//arr1.length = 0;
arr1.splice(12,1);
arr2.splice(7);