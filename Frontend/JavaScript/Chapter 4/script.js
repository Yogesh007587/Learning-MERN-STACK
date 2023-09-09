let todo=[];
let req=prompt("please enter your request");
while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req=="list"){
        console.log("-----------");
        for(task of todo){
            console.log(task);
        }
        console.log("-----------");
    }
    else if(req=="add"){
        let task=prompt("please enter your task to add.");
        todo.push(task);
        console.log("added");
    }
    else if(req=="delete"){
        let del=prompt("enter what you want to remove?");
        for(task of todo){
            if(task==del){
                let index=todo.indexOf(task);
                todo.splice(index,1);
                console.log("task deleted");
            }
        }
    }
    req=prompt("please enter your request");

}