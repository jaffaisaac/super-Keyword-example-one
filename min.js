class Animal{
    constructor(name){
        this._name =name;
    }
    speak(){
        console.log(`${this._name} makes sound`)
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);//this is accessing the property is the parent class 
    }
    speak(){
        super.speak(); // this is accessing the method in the parent class
        return `${this._name} barks`;
    }
}
//instancing the dog class
 const dog1 = new Dog('Jack');

console.log( dog1._name)

console.log(dog1.speak())