const carTemp = function(make,model,price,year,color)
{
    this.make = make;
    this.model = model;
    this.price = price;
    this.year = year;
    this.color = color;
    this.details= function(){
        return `${this.make} ${this.model}  ${this.price}  ${this.year}  ${this.color}  ` 
    }
};
const car1 = new carTemp('Ford','Mustang', 30000, 2021,'Red');
console.log(car1);
const car2 = new carTemp('Honda','Civic', 30000, 2020,'Blue');
console.log(car1);

/*const car2 = car1;
car2.color ='blue';
car2.year = 2022;
console.log(car1);
console.log(car2);
console.log(car1.details());
console.log(car2.details());
const car3 = Object.assign({},car1);
car3.color = "Green";*/