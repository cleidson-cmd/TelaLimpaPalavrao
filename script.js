var texto = document.getElementById("texto");
var subtitulo = document.getElementById("subtitulo");
var contador = document.getElementById("contador");
var botao = document.getElementById("btn");
var basePalavrao = ["porra", "caralho", "puto", "puta", "misera", "viado", "corno", "vagabundo","cu", "cú", "miseria"]
var digitos;
var qtdPalavraoR = 0;
var msgPalavraoR = document.getElementById("removePalavrao");
var msgPalavraoR2 = document.getElementById("palavraoRemove");

texto.addEventListener('keypress', (e)=>{
    digitos =  texto.value.length;
    var max = 255;
    if (digitos == max){
        e.preventDefault();
        texto.value = "";
    }else{
        contador.innerText = digitos + 1    
    }   
})


botao.addEventListener('click', () =>{
    if (botao.value == "Limpar frase"){

        botao.value = "Limpar outra frase"
        subtitulo.innerText = "Frase limpinha :)"
        botao.style.backgroundColor = "rgb(78, 218, 108)";
        subtitulo.style.color = "rgb(78, 218, 108)";
        botao.style.borderColor = "rgb(78, 218, 108)";
        texto.style.borderColor = "rgb(78, 218, 108)";

        var textAreaArray = texto.value.split(" "); 
        for (var i = 0; i <= basePalavrao.length; i ++){
            for (var y = 0; y <= basePalavrao.length; y ++){
                if (textAreaArray[y] === basePalavrao[i] & textAreaArray[y] != null){
                    qtdPalavraoR ++;
                    textAreaArray[y] = "***";                                       
                }
               
            }
        }
        var resposta = qtdPalavraoR > 0 ? "Foram removidos" : "Sua frase já está limpinha ;)";
        var temp = qtdPalavraoR + " Palavrões ";
        msgPalavraoR.innerText = temp;
        msgPalavraoR2.innerText = resposta;
        texto.value = textAreaArray.join(" ");
        
    }else{
        location.reload();        
    }
    
})

