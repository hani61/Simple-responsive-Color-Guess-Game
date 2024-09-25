
let rgb = document.querySelector("#rgb-color");
let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);
let status = document.getElementById("status");

let temp = document.getElementsByClassName("color-block");

function randomize(){
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);
}

function isCorrect() {
    document.querySelectorAll('div.color-block').forEach((div) => {
        div.style.backgroundColor = document.querySelector("#rgb-color").innerHTML;
    });
    document.getElementById("status").innerHTML = "Correct!";
}

function isWrong(){
    document.getElementById("status").innerHTML = "Try Again!";
}

function randomizeElements(){
    let randomBlock = Math.floor(Math.random() * temp.length);
    document.querySelectorAll('div.color-block').forEach((div) => {
        div.style.display = 'inline-block';
        randomize();
        div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    });
    document.getElementById("status").innerHTML = "Start Guessing!";
    document.getElementById("rgb-color").innerHTML = temp[randomBlock].style.backgroundColor ;
}
document.addEventListener('DOMContentLoaded',  () => {
    document.querySelectorAll('div.color-block').forEach((div)=>{
    div.addEventListener('click', function(){
            if (this.style.backgroundColor === document.querySelector("#rgb-color").innerHTML) {
                isCorrect();
            }
            else {
                div.style.display = "none";
                isWrong();
            }
        }
    );
})

    document.querySelector("#rgb-color").innerHTML = `rgb(${red}, ${green}, ${blue})`;
    document.querySelector('#restart').addEventListener('click', randomizeElements);
    randomizeElements();

})


