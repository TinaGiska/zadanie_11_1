function Phone(brand, price, color,system) {
	this.brand = brand;
	//by using this, the "brand" property of the object we create will assume the value of the brand argument
	this.price = price;
	this.color = color;
  this.system = system;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " the price is " + this.price + " and the system it is " + this.system + ".");
}

var samsungGalaxyS6 = new Phone("Samsung",1500,"black","Android");
var iPhone6S = new Phone("Apple", 2250, "silver","iOS");
var onePlusOne = new Phone("OnePlus",1299,"white","Android");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();
