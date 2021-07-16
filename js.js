
let diretorio = "./img/";
let lista = new Array ();

for( let i = 0; i < 10; i++) {
    lista[i] = diretorio + i + ".png"
    new Image().src = lista[i]
}

let count = 0;

function slot () {
    let aleatorio = setInterval(function(){
        count++;

    // Gerar número randomico 
        let esquerda = Math.floor(Math.random() * 10);
        let meio = Math.floor(Math.random() * 10);
        let direita = Math.floor(Math.random() * 10);

        document.esquerda.src = lista[esquerda];
        document.meio.src = lista[meio];
        document.direita.src = lista[direita];


        if (count > 15) {
            let final_esquerda = lista[esquerda]
            let final_meio = lista[meio]
            let final_direita = lista[direita]
       

        // Condicionais de vitória 
        if ((final_esquerda == final_meio) || (final_esquerda == final_direita) || (final_meio == final_direita)){
            document.getElementById("all").innerHTML = "Quase lá! Você ACERTOU DOIS!!"
        }

        else if((final_esquerda == final_meio) && (final_esquerda == final_direita)){
            document.getElementById("all").innerHTML = "Parabéns!!! Você ACERTOU TRÊS!!"
        }

        else {
            document.getElementById("all").innerHTML = "Não foi dessa vez. TENTE NOVAMENTE!"
        }

        count = 0

        clearInterval(aleatorio)
        }
    }, 100);
}


const btn = document.getElementById('btn')
btn.addEventListener("click", slot)






























