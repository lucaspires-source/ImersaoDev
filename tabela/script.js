
//Função de calcular pontos
const calculaPontos = (jogador) => {
    let pontos = (jogador.vitorias * 3) + jogador.empates

    return pontos
}
//objetos
const paulo = {
    nome: "Paulo",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0,
}
paulo.pontos = calculaPontos(paulo)
const rafa = {
    nome: "Rafa",
    vitorias: 2,
    empates: 4,
    derrotas: 2,
    pontos: 0,
}
rafa.pontos = calculaPontos(rafa)

const jogadores = [rafa, paulo]
 console.log(jogadores)

const exibirJogadoresNaTabela = (jogadores) => {
    let html = ""

    for (let i = 0; i < jogadores.length; i++) {
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button id='vitoria' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button id='empate' onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button id='derrota' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    const tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
}

exibirJogadoresNaTabela(jogadores)

const adicionarDerrota = (i) => {
    let jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTabela(jogadores)
   }
   const adicionarEmpate = (i) => {
    let jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTabela(jogadores)
   }
   
   const adicionarVitoria = (i) => {
    let jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTabela(jogadores)
   }