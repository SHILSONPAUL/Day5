
// function Multiply(a,b){
//     return a*b;
//      }
// let res=Multiply(3,4);
// console.log(res);
// let Multiply=function(a,b){
//     return a*b;
//      }
// let res=Multiply(3,4);
// console.log(res);
// let Multiply=(a,b)=>{
//     return a*b;
//      }
// let res=Multiply(3,4);
// console.log(res);
// let square=(a)=>{       //callback function by passing function as a parameter
//     return a*a;
//      }
//      let res=square(3);
//      console.log(res);
// let getdetails=(id,id2,c,d)=>{
//     console.log("Inside the function ");
//     console.log("id:"+ id);
//     c({Id:id,name:'Shilson'});
//     d({Id:id2,name:"Paul"});
// }
// getdetails(1,2,(a)=>{
//     console.log("Finished "+a.Id);
//     console.log("Name is: "+a.name);
// },(b)=>{
//     console.log("Finished "+b.Id);
//     console.log("Name is: "+b.name);

// });

// function getuser(id){
//     setTimeout(()=>{
//     return({Id:id,name:'Meera'});    
//     },2000);
// }
// console.log("Before");
// const user= getuser(1);
// console.log(user);

// function getuser(id,c){
//     setTimeout(()=>{
//     c({Id:id,name:'Meera'});    
//     },2000);
// }
// console.log("Before");
// getuser(1,(a)=>{
//     console.log(a);
// });
// console.log("After");

// var person = new Object();
// person.name="karlos";
// person.age="25";

// var person = new Object();
// person.setValues=function(n,a){
//     this.name=n;
//     this.age=a;
// };
// person.getValues = function(){
//     console.log("Name is: "+this.name);
//     console.log("Age is: "+this.age);

// };
// person.setValues("Rahul",28);
// person.getValues();
//creating new instances of person object using constructors
// function person(fname,lname){
//     this.firstname=fname;
//     this.lastname=lname;
// }
// person.prototype.getDetails = function(){
//     console.log("The name of the person is : "+this.firstname+" "+this.lastname);
// }
// //creating instances
// let p1 = new person("Ram", "Mukul");
// let p2 = new person("Akhil", "Avasthi");
// p1.getDetails();
// p2.getDetails();
// //using create() method
// const coder = {
//     isStudying : false,
//     printIntroduction : function(){
//         console.log(`My name is ${this.name}. Am I studying? ${this.isStudying}`)
//     }
// }
// // Object.create() method
// const m1 = Object.create(coder);
// m1.name = "Mukul";
// m1.isStudying = true;
// m1.printIntroduction();

// class Vehicle{
//     constructor(name,maker,engine){
//         this.name = name;//object instances
//         this.maker = maker;
//         this.engine = engine;
//     }
//     getDetails(){
//         return(`The name of the bike is : ${this.name}.`);
//     }
// }
// //creating class objects
//     let bike1 = new Vehicle('Hayabusa','Suzuki','1340');
//     let bike2 = new Vehicle('Ninja','Kawasaki','998');
//     console.log(bike1.name);
//     console.log(bike2.name);
//     console.log(bike1.getDetails());
//Inheritence
class Person{
    constructor(name){
        this.n = name;
    }
}
class Student extends Person{
    constructor(Name,Id){
        super(Name);
        this.id = Id;
    }
    toString(){
        return(`Name of the person : ${this.n}, Student ID : ${this.id}`);
    }
}
let student1 = new Student('Mukul', 28);
console.log(student1.toString());






