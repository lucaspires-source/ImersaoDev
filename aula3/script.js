1
let tentativas = 3 
let numeroSecreto = Math.round(Math.random() * 10)
console.log(numeroSecreto)
while (tentativas > 0){
    const chute = parseInt(prompt ("Digite um número entre 0 e 10"))
    if (numeroSecreto == chute){
        alert("Você acertou")
        break
    
    }else if (chute > numeroSecreto){
        alert("O Número secreto é menor")
        tentativas--

    }
    else if (chute < numeroSecreto){
        alert("O Número secreto é maior")
        tentativas--

    }
    if (tentativas == 0){
        alert("Suas tentativas acabaram o número secreto era " + numeroSecreto)
    }
}

