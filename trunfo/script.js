const cartaPaulo = {
    nome: "Goku",
    atributos: {
        ataque: 100,
        defesa: 80,
        magia: 50,
    }
}

const cartaRafa = {
    nome: "Mudkip",
    atributos: {
        ataque: 90,
        defesa: 40,
        magia: 70,
    }
}


const cartaGuilherme = {
    nome: "Baby Yoda",
    atributos: {
        ataque: 10,
        defesa: 5,
        magia: 100,
    }
}

let cartaMaquina = ''
let cartaJogador = ''
const cartas = [cartaGuilherme, cartaRafa, cartaPaulo]
const sortearCarta = () => {
    let numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    let numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)
    console.log(cartaMaquina)
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    exibirOpcoes()
}

const exibirOpcoes = () => {
    const opcoes = document.getElementById("opcoes")
    let opcoesTexto = ""
    for (let atributo in cartaJogador.atributos) {

        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo 

    }
    opcoes.innerHTML = opcoesTexto
}

const obtemAtributiSelecionado = () =>{
    const radioAtributo = document.getElementsByName("atributo")

    for (let i = 0; i < radioAtributo.length; i++ ){
        if(radioAtributo[i].checked){
            console.log(radioAtributo[i].value)
            return radioAtributo[i].value
        }
    }
}
const jogar = () => {
   let atributoselecionado = obtemAtributiSelecionado()

   if(cartaJogador.atributos[atributoselecionado] > cartaMaquina.atributos[atributoselecionado]){
        alert("Você venceu")
   }else if(cartaJogador.atributos[atributoselecionado] < cartaMaquina.atributos[atributoselecionado]){
       alert("Você Perdeu")
   }else if (cartaJogador.atributos[atributoselecionado] == cartaMaquina.atributos[atributoselecionado]){
        alert("Você empatou")
   }
}