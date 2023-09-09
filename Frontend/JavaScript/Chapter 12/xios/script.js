let btn=document.querySelector("button");
let p=document.querySelector("p");
btn.addEventListener("click",async ()=>{
    let value=document.querySelector("input").value;
    let newData=await getColleges(value);
    show(newData);
})

function show(newData){
    let list=document.querySelector("#list");
    list.innerText="";
    for(data of newData){
        console.log(data);
        const li = document.createElement('li');
        li.innerText=data.name+", "+data.state-province;
        list.appendChild(li);
    }
}


let url="http://universities.hipolabs.com/search?name=";
let country="nepal";
async function getColleges(value){
    try{
        let res=await axios.get(url+value);
        return res.data;
        // console.log(res.data);
    }catch(E){
        // return "No college Found";
        console.log(E);
        return [];
    }
}













// let url="https://icanhazdadjoke.com";

// async function getJokes(){
//     try{
//         const config={headers:{Accept:"application/json"}};
//         let res=await axios.get(url,config);
//         console.log(res.data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }