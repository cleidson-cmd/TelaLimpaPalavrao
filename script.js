var texto = document.getElementById("texto");
var subtitulo = document.getElementById("subtitulo");
var contador = document.getElementById("contador");
var botao = document.getElementById("btn");
var basePalavrao = ["porra", "caralho", "puto", "puta", "misera", "viado", "corno", "vagabundo"]
var digitos;


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
                    //console.log(basePalavrao[i], textAreaArray[y]);
                    //textAreaArray[y].replace(/textAreaArray[y]/gi, '***');
                    textAreaArray[y] = "***";
                    console.log(basePalavrao[i], textAreaArray[y]);                    
                }else{
                    console.log(basePalavrao[i], textAreaArray[y]);
                }
               
            }
        }
        console.log(textAreaArray);
        //texto.innerText = textAreaArray.join(" ");

    }else{
        location.reload();
        //botao.value = "Limpar frase"
        //subtitulo.innerText = "Digite a sua frase"
        //botao.style.backgroundColor = "rgb(89, 131, 209)";
        //subtitulo.style.color = "rgb(89, 131, 209)";
        //botao.style.borderColor = "rgb(89, 131, 209)";
        //texto.style.borderColor = "black"       
              
    }
    
})

