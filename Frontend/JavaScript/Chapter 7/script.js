// let arrayAverage=(arr)=>{
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     console.log(sum/arr.length);
// }
// let arr=[1,2,3,4,5];
// arrayAverage(arr);
// let findEven=(n)=>{
//     if(n%2==0){
//         return "it is even";
//     }else{
//         return "it is odd";
//     }
// }
// let output=findEven(11);
// console.log(output);
let length=4;
function callback(){
    console.log(this.length);
}
const object={
    message:'Hello,World!',
    logMessage(){
        console.log(this.message);
    },
    length:5,
    method(callback){
        callback();
    },
};
setTimeout(object.logMessage(),1000);
// object.method(callback,1,2);