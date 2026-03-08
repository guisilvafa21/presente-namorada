function abrirPresente(){

document.querySelector(".gift").style.display="none"

document.getElementById("conteudo").classList.remove("hidden")

document.getElementById("musica").play()

criarCoracoes()

mostrarSlides()

iniciarCarta()

contadorTempo()

}

function criarCoracoes(){

setInterval(()=>{

let heart=document.createElement("div")

heart.className="heart"

heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"

heart.style.fontSize=(Math.random()*25+15)+"px"

document.body.appendChild(heart)

setTimeout(()=>{
heart.remove()
},6000)

},300)

}

let slideIndex=0

function mostrarSlides(){

let slides=document.getElementsByClassName("slide")

for(let i=0;i<slides.length;i++){
slides[i].style.display="none"
}

slideIndex++

if(slideIndex>slides.length){
slideIndex=1
}

slides[slideIndex-1].style.display="block"

setTimeout(mostrarSlides,3000)

}

function iniciarCarta(){

let texto="Desde que você entrou na minha vida tudo ficou mais bonito. Seu sorriso ilumina meus dias e sua presença transforma qualquer momento em algo especial. Eu sou muito grato por ter você comigo. Feliz Dia da Mulher, meu amor ❤️"

let i=0

let velocidade=50

function escrever(){

if(i<texto.length){

document.getElementById("textoCarta").innerHTML+=texto.charAt(i)

i++

setTimeout(escrever,velocidade)

}

}

escrever()

}

function contadorTempo(){

let inicio=new Date("2023-01-01")

setInterval(()=>{

let agora=new Date()

let diff=agora-inicio

let dias=Math.floor(diff/(1000*60*60*24))

document.getElementById("tempo").innerText=dias+" dias"

},1000)

}