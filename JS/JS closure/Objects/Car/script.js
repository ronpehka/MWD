const car = {};
car.make = "Aston Martin";
car.model = "Vantage";
car.color = "Gray";
car.mileage = 0;
car.value = 45000;
car.year = 2014;





car.driving = function(num = 100){
    mileage = this.mileage + num;
    value -= (this.mileage /10 );
    console.log("Driving, having fun");
}
car.stats = function(){
    this.value -= this.mileage;
    return `${this.color} ${this.make} ${this.model} ${this.value}` 
}
car.driving(1000);
console.log(car.stats());
let curStat = car.stats();
car.driving(1000);
car.driving(5000);
car.driving(5000);
car.driving(1000);
console.log(curStat);
console.log(car.stats());
