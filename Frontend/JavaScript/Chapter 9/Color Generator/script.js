let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    let randomNumber1 = Math.floor(Math.random() * 255 );
    let randomNumber2 = Math.floor(Math.random() * 255 );
    let randomNumber3 = Math.floor(Math.random() * 255 );
    let a = document.querySelector("h1").innerText = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
    document.querySelector("div").style.backgroundColor = a;
});


