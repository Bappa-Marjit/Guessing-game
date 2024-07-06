let body= document.querySelector('body');
let input= document.querySelector('input');
let h2= document.querySelector('h2');
let btn= document.querySelector('#enter');
let p = document.querySelector('p');
let genret= document.querySelector("#rest");

let gameStart = false;
let count = 0;

genret.style.backgroundColor = "red";
let random ;

genret.addEventListener('click', function(){
    let gameStart = true;
    random = Math.floor(Math.random() * 10)+1;
    console.log(random);
    genret.style.backgroundColor ="green";
});

btn.addEventListener('click', function(){
    count ++;
    p.innerText = count;
    if(input.value == random){
        h2.innerText = "CONGRATS YOU WON";
        input.value = "";
        body.classList.add("win");
        setTimeout(function(){
        body.classList.remove("win");
        },1000)
        setTimeout(function(){
        reset();
        },1200)
    }else if(input.value == " quite"){
        h2.innerText = " USER QUITE!";
        input.value = "";
    }else{
        h2.innerText = " YOU WERRE WRONG TRY AGAIN";
        input.value = "";
        body.classList.add("try");
        setTimeout(function(){
            body.classList.remove("try");
        },120)
    }
});

function reset(){
    random = Math.floor(Math.random() * 10)+1;
    console.log(random);
    gameStart = false;
    count = 0;
    p.innerText = "";
    h2.innerText = "Genret the Number";
    genret.style.backgroundColor = "red";
}

