var texto = document.getElementById("texto");
var contador = document.getElementById("contador");
var botao = document.getElementById("btn");
var basePalavrao = ["porra", "caralho", "puto", "puta", "misera", "viado", "corno", "vagabundo"]
var digitos;

texto.addEventListener('keypress', (e)=>{
    digitos =  texto.value.length;
    var max = 255;
    contador.innerText = digitos + 1
    
    if (digitos == max -1){
        e.preventDefault();
        console.log("chegou")
    } 
})


botao.addEventListener('click', () =>{
    basePalavrao.forEach(palavrao => {
        if (palavrao in digitos){
            console.log(palavrao)
        }
    });
})