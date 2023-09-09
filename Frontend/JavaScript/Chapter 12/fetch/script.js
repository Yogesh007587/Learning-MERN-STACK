let url = "https://catfact.ninja/fact";
let button=document.querySelector("button");
let p=document.querySelector("p");
button.addEventListener("click",async ()=>{
    let catFact=await getFacts();
    p.innerText=catFact;
});
async function getFacts(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        return "No fact found";
    }
}


















// fetch(url)
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data.fact);
//     })
//     .catch((err) => {
//         console.log("Error - ", err);
//     });