let btn=document.querySelector("#add");
let add=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let newItem = document.createElement('li');
    let textSpan=document.createElement('span'); // New span element for the text
    textSpan.innerText = add.value;
    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");
    let edit=document.createElement("button");
    edit.innerText="Edit";
    edit.classList.add("edit");
    newItem.appendChild(textSpan);
    newItem.appendChild(delBtn);
    newItem.appendChild(edit);
    ul.appendChild(newItem);
    add.value="";
    
});
ul.addEventListener("click",function(event){
    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove();
    }
    if(event.target.classList.contains("edit")){
        let newWork=prompt("Enter your change Todo Work");
        if(newWork!==null){
            event.target.parentElement.querySelector('span').innerText = newWork;
        }

    }
})
