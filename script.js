const botaolike = document.querySelector (".like");
const botaodeslike= document.querySelector(".deslike");

botaolike.addEventListener("click", clicklike);
botaodeslike.addEventListener("click", clickdeslike);

function clicklike () {

console.log("fui clicado");
let text=botaolike.querySelector("span");
text.textContent++;





}

function clickdeslike(){  


console.log("fui clicado");
let texto=botaodeslike.querySelector("span");
texto.textContent++;


}