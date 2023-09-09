// // let arr=[1,2,3,4,5,6,7,8,9,20];
// // // arr.forEach(function(el){
// // //     console.log(el);
// // // })
// // // let newArr=arr.map(function(el){
// // //     return el*2;
// // // })
// // // console.log(newArr);
// // let even=arr.filter((num)=>{
// //     return num%2==0;
// // })
// // let a=[1,2,3,4].reduce((res,el)=>(res+el));
// let array=[1,2,5,4,3,10,12,18];
// let minimum=array.reduce((min,el)=>{
//     if(min<el){
//         return min;
//     }else{
//         return el;
//     }
// });
// console.log(minimum);
// let arr=[10,20,30,40,50,60];
// let value=arr.every((el)=>el%10==0);
// console.log(value);
// let data={
//     email:"abc@gmail.com",
//     password:"abcd",
// };
// const dataCopy={...data, id:123};
// function sum(a,b,c,d){
//     console.log(arguments);
// }
// let names=["tony","kooky","loony","thor"];
// let [winner,runnerUp,...others]=names;
// console.log(winner,runnerUp);
// let student={
//     name:"yogesh",
//     class:12,
//     Roll_No:65,
//     username:"yogesh1",
//     password:"yogesh2",
// }
// let {username:user,password:pass,...others}=student;
let arr=[1,2,3,4,5];
const square=arr.map((el)=>el*el);
const sumSquare=square.reduce((acc,el)=>acc+el,0);
console.log(sumSquare/arr.length);
