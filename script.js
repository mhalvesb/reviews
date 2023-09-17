let names = document.querySelector(".name h1");
let prof = document.querySelector(".prof h1")
let desc = document.querySelector(".desc p");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let image = document.querySelector(".img-container");
const surprise = document.querySelector(".surprise button");
let ordem = 0;

function updateInfo(){
    names.innerHTML = `${pessoas[ordem].nome}`;
    prof.innerHTML = `${pessoas[ordem].profissao}`;
    desc.innerHTML = `${pessoas[ordem].descri}`;
   // image.style.backgroundImage = `url(${pessoas[ordem].image})`;
    console.log(image.style.backgroundImage = "url(css/" + pessoas[ordem].foto + ")");
}


surprise.addEventListener("click", ()=>{
    let randomNumber = Math.abs((Math.random() * pessoas.length - 1).toFixed(0));
    if(ordem === randomNumber){
        while(randomNumber === ordem){
            randomNumber = Math.abs((Math.random() * pessoas.length - 1).toFixed(0));
            
        }
        ordem = randomNumber;
        updateInfo();
        console.log(randomNumber);
        return;
    } else{
        ordem = randomNumber;
        updateInfo();
        return;
    }
})

left.addEventListener("click", ()=>{
    ordem < 1 ? ordem = pessoas.length - 1 : ordem--;
    updateInfo();
})
right.addEventListener("click", ()=>{
    ordem >= pessoas.length - 1 ? ordem = 0 : ordem++;
    updateInfo();
})