//Objetos das cartas
const cartaPaulo = {
    nome: "Goku",
    imagem: "https://wpobservatoriodeseries.elav.tmp.br/wp-content/uploads/2020/05/Novo-Projeto-65.jpg",
    atributos: {
        ataque: 100,
        defesa: 80,
        magia: 50,
    }
}

const cartaRafa = {
    nome: "Mudkip",
    imagem: "https://mestrepokemon.com/wp-content/uploads/2020/03/Pok%C3%A9mon-Mudkip-Pok%C3%A9dex.jpg",
    atributos: {
        ataque: 90,
        defesa: 40,
        magia: 70,
    }
}


const cartaGuilherme = {
    nome: "Baby Yoda",
    imagem: "https://neoradar.uai.com.br/wp-content/uploads/sites/8/2020/12/baby-yoda-scaled-1280x720.jpg",
    atributos: {
        ataque: 10,
        defesa: 5,
        magia: 100,
    }
}


const cartaPa = {
    nome: "Seiya de Pegaso",
    imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

const cartaRafaela = {
    nome: "Bulbasauro",
    imagem: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

const cartaGui = {
    nome: "Lorde Darth Vader",
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

const cartaLol = {
    nome: "Caitlyn",
    imagem: "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
    atributos: {
        ataque: 95,
        defesa: 40,
        magia: 10
    }
}

const cartaNaruto = {
    nome: "Naruto",
    imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}

const cartaHarry = {
    nome: "Harry Potter",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}

const cartaBatman = {
    nome: "Batman",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 0
    }
}

let cartaMaquina = ''
let cartaJogador = ''
let pontosJogador = 0
let pontosMaquina = 0

const cartas = [
    cartaGuilherme, 
    cartaRafaela, 
    cartaPa,
    cartaPaulo, 
    cartaRafa,
     cartaGui, 
     cartaLol, 
     cartaNaruto, 
     cartaHarry, 
     cartaBatman
    ]



const atualizaPlacar = () =>{
    const divPlacar = document.getElementById('placar')
    let html = "Jogador " + pontosJogador + " / " + pontosMaquina + " Máquina"
    divPlacar.innerHTML = html
}

//sorteia as cartas entre os jogadores
const sortearCarta = () => {
    console.log("fui clickado")
    let numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina,1)
    let numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador,1)
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

    exibeCartaJogador()
}


///Exibe a Carta da Maquina
const exibeCartaMaquina = () => {
    const divCartaMaquina = document.getElementById("carta-maquina")
    const moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="inherit; height: inherit; position: absolute;">'
    divCartaMaquina.style.backgroundImage = `url(${(cartaMaquina.imagem)})`
    const nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    
    var opcoesTexto = ""

    for (let atributo in cartaMaquina.atributos) {

        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    let html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
    

}

///Exibe a Carta do Jogador
const exibeCartaJogador = () => {
    const divCartaJogador = document.getElementById("carta-jogador")

    const moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="inherit; height: inherit; position: absolute;">'

    divCartaJogador.style.backgroundImage = `url(${(cartaJogador.imagem)})`
    const nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    let opcoesTexto = ""
    for (let atributo in cartaJogador.atributos) {

        opcoesTexto += "<input type='radio' name='atributo' value='" 
        + atributo 
        + "'>" 
        + atributo 
        + " " 
        + cartaJogador.atributos[atributo] 
        + "<br>"

    }

    let html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = nome + moldura + html+ opcoesTexto + "</div>"

}

//Captura os atributos dos objetos
const obtemAtributiSelecionado = () => {
    const radioAtributo = document.getElementsByName("atributo")

    for (let i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            console.log(radioAtributo[i].value)
            return radioAtributo[i].value
        }
    }
}


//proxima rodadada

const proximaRodada = () =>{
    const divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    const divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}

//atualiza a quantidade de cartas
const atualizaQuantidadeDeCartas = () =>{
    const DivQuantidadeDeCartas = document.getElementById("quantidade-cartas")
    let html =  "Quantidade de cartas no Jogo:" + cartas.length
    DivQuantidadeDeCartas.innerHTML = html
}

atualizaPlacar()
atualizaQuantidadeDeCartas()    
//Lógica do Jogo
const jogar = () => {
    let atributoselecionado = obtemAtributiSelecionado()
    let divResultado = document.getElementById("resultado")
    exibeCartaMaquina()
    document.getElementById("btnJogar").disabled = true
    document.getElementById("btnProximaRodada").disabled = false
    if (cartaJogador.atributos[atributoselecionado] > cartaMaquina.atributos[atributoselecionado]) {
        htmlResultado = '<p class=resultado-final>Você venceu</p>'
        divResultado.innerHTML = htmlResultado
        pontosJogador++
        atualizaPlacar()
        atualizaQuantidadeDeCartas()
    } else if (cartaJogador.atributos[atributoselecionado] < cartaMaquina.atributos[atributoselecionado]) {
        htmlResultado = '<p class=resultado-final>Você perdeu</p>'
        divResultado.innerHTML = htmlResultado
        pontosMaquina++
        atualizaPlacar()
        atualizaQuantidadeDeCartas()
    } else  {
        htmlResultado = '<p class=resultado-final>Você empatou</p>'
        divResultado.innerHTML = htmlResultado
    }

    if (cartas.length == 0){
        alert("Fim do jogo")

        if(pontosJogador > pontosMaquina){
            htmlResultado = '<p class=resultado-final>Você venceu,Parabéns!</p>'
        }
        else if (pontosJogador < pontosMaquina){
            htmlResultado = '<p class=resultado-final>Você perdeu,mas não desanime!</p>'
        }
        else(
            htmlResultado = '<p class=resultado-final>Você empatou</p>'
        )
    }
}