// function add(name) {
//     console.log("My name is "+name);
//     console.log(`My name is ${name}`);
// }
// add("yogesh");
// let obj={
//     java:40,
//     fulls:60,
//     total:function(){
//         console.log(this.java+this.fulls)
//     }
// }
// console.log(obj.total)
// let arr=[12,45,64,0,3,7,59,76]
// console.log(arr);
// for(let i in arr){
//     console.log(arr[i])
// }
// arr.forEach((element,index,arr)=>{  
//     // console.log(element);
//     // console.log(index);
//     // console.log(arr);
//     // return element;
//     console.log(element,index,arr);

// })
// let ne =arr.map((element,index,arr)=>{
//     return element;
// })
// console.log(ne);
// let newa=arr.filter((ele)=>{
//     return ele>10
// })
// console.log(newa);
// let sum=0
// newa.forEach((ele)=>{
//     sum=sum+ele
//     // return sum
// })
// console.log(sum)
// function add(a,b){
//     let name1="gla acadadadad"
//     return a+b
//     // console.log(name1)
// }
// console.log(add(5,6))
// var arr=[1,2,3,4,5,"String","Hello"];
// function getString(item){
//     return typeof item=='string';
// }
// function getNumber(item){
//     return typeof item=='number';
// }
// function get(arr,fun1){
//     let res=[];
//     for(let item of arr){
//         if(fun1(item)){
//             res.push(item);
//         }
//     }
//     return res;
// }
// console.log(get(arr,getString));
// console.log(get(arr,getNumber));
// function outer(){
//     let user='gla';
//     function inner(){
//         console.log(user)
//     }
//     return inner
    // inner()
// }
// let inner =outer();
// inner()
// console.log(inner)
// outer()
// inner()
function step1(step2){                                //{
    setTimeout(()=>{
        console.log('alpha beta gamma')     //callback function{}
        // return 'image'
        step2('image')
    },1000)                          // timeout function
}
function step2(image){
    setTimeout(()=>{
        console.log('hey alpha')
        return 'alpha'
    },2000)
}
function step3(){
    setTimeout(()=>{
        console.log('hello kooky')
        return 'kooky'
    },1000)
}
function step4(){
    setTimeout(()=>{
        console.log('hey looony')
        return 'loony'
    },2000)
}
// function complete(){
//     step1()
//     step2()
//     return;
// }
// complete()
step1((image)=>{
    step2(image,(alpha)=>{
        step3(alpha,(kooky)=>{
            step4()
        })
    })
})                                    //}
