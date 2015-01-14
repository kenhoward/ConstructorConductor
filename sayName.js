/*
Create a Person constructor that accepts name and age as parameters 
and sets those properties accordingly in the Constructor.
*/

var Person = function(name, age){
	this.name = name;
	this.age = age;
}

//Now create three instances of Person with data you make up

var someOne = new Person ('Billy', 24);
var someTwo = new Person ('Sue', 25);
var someThree = new Person ('Jimmy', 18);

/*
Now add a sayName method on your Person class that will alert 
the name of whatever Person instance called it.
*/

someOne.sayName();
someTwo.sayName();
someThree.sayName();
