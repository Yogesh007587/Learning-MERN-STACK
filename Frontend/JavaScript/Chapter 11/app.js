// let h1=document.querySelector("h1");
// function colorChange(color,delay){
//     return new Promise((resolve,error)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             resolve("color changed properly!");
//             error("not defined the color properly");
//         },delay);
//     });
// }
// colorChange("red",1000)
// .then((resolve)=>{
//     console.log("changed to red color: ",resolve);
//     return colorChange("orange",1000);
// })
// .then((resolve)=>{
//     console.log("changed to orange color: ",resolve);
//     return colorChange("blue",1000);
// })
// .then((resolve)=>{
//     console.log("changed to blue color: ",resolve);
//     return colorChange("green",1000);
// })
// .then((resolve
//     )=>{
//     console.log("changed to green color: ",resolve);
//     return colorChange("purple",1000);
// })
// .then((resolve)=>{
//     console.log("changed to purple color: ",resolve);
//     return colorChange("pink",1000);
// })
// .then((resolve)=>{
//     console.log("color changed to pink: ",resolve)
//     return colorChange("abc",1000);
// })
// .then((resolve)=>{
//     console.log("color changed to abc: ",resolve);
// })
// .catch((error)=>{
//     console.log("not able to change: ",error);
// })

// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();
// }
// function three(){
//     let ans=two()+one();
//     console.log(ans);
// }
// three();
// function saveToDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("your db was saved");
//         }else{
//             reject('something went wrong');
//         }
//     })
// }
// saveToDb("yogesh").then((result)=>{
//     console.log("promise was resolved: ",result);
//     return saveToDb("tripathi");
// })
// .then((result)=>{
//     console.log("second promise was resolved: ",result);
// })
// .catch((error)=>{
//     console.log("promise was rejected: ",error);
// })

async function greet(){
    throw "some error";
    return "hello";
}
greet()
.then((result)=>{
    console.log("promise was successful");
    console.log(result);
})
.catch((err)=>{
    console.log("promise failed due to: ",err);
})