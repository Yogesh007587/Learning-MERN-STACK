let form=document.querySelector("form");
let user =document.querySelector("#user");
let pass=document.querySelector("#pass");
form.addEventListener("submit",function(e){
    e.preventDefault();
    // alert("Form Submitted");
    // console.log("form submitted");
    // let inp=document.querySelector("input");
    // console.log(inp.value);
    
})
// user.addEventListener("input",function(){
//     console.log("final value= ",this.value);
// })
// pass.addEventListener("input",function(){
//     console.log("final value= ",this.value);
// })
let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    document.querySelector("button").style.backgroundColor=color;
})
// btn.onclick=()=>{
//     let red=Math.floor(Math.random*255);
//     let green=Math.floor(Math.random*255);
//     let blue=Math.floor(Math.random*255);
//     let color=`rgb(${red},${green},${blue})`;
//     document.querySelector("button").style.backgroundColor=color;
// }
let input=document.querySelector("#name");
let heading=document.querySelector("h2");
input.addEventListener("change",function(){
    let letters=/^[A-Za-z]+ /;
    if(this.value.match(letters)){
        heading.innerText=this.value;
    }
    else{
        heading.innerText="False Value";
    }
    
})