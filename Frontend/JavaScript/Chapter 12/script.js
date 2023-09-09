let h1 = document.querySelector("h1");
function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed properly!");
        }, delay);
    });
}

async function demo() {
    try {
        await colorChange("orange", 1000);
        await colorChange("white", 1000);
        await colorChange("green", 1000);
        await colorChange("blue", 1000);
    }catch(err){
        console.log("error caught");
        console.log(err);
    }
    let a=5;
    console.log("number = ",a+5);
    

}
demo();