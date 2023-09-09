// let arr=[1,2,3];
// console.log(arr);
// console.log(arr.__proto__);
// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.talk=function(){
//     console.log(`I'm ${this.name}`);
// }
// let p1=new Person("kooky",23);
// let p2=new Person("Prerna",23);
// console.log(p1);
// console.log(p2);
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi, My name is ${this.name}`);
    }
}
class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
    }
    greet(){
        return "Hello";
    }
}
let p1=new Person("kooky",23);
console.log(p1);
let p2=new Student("Prerna",25,99);
console.log(p2);