function abrirPresente(){

document.querySelector(".gift").style.display="none"

document.getElementById("conteudo").classList.remove("hidden")

document.getElementById("musica").play()

criarCoracoes()

}

function criarCoracoes(){

setInterval(()=>{

let heart=document.createElement("div")

heart.className="heart"

heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"

heart.style.fontSize=(Math.random()*20+10)+"px"

document.body.appendChild(heart)

setTimeout(()=>{
heart.remove()
},5000)

},300)

}