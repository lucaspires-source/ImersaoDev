 
const adicionarFilme = () =>{
    
    const campoFilmeFavorito = document.querySelector('#filme')
    const filmeFavorito = campoFilmeFavorito.value

    if(filmeFavorito.endsWith('.jpg')){
        listarFilmesNaTela(filmeFavorito)
        
    }else{
        alert("Imagem invalida,somente urls de .jpg são aceitas")
        
    }
    campoFilmeFavorito.value = ""
}

const listarFilmesNaTela = (filme) =>{
    const listaFilmes = document.querySelector('#listaFilmes')
    const elementoFilme = "<img src="+filme+"/>"
    listaFilmes.innerHTML = listaFilmes.innerHTML +elementoFilme
}

const resetarLista = () =>{
    const listaFilmes = document.querySelector('#listaFilmes')
    listaFilmes.innerHTML = ""
    campoFilmeFavorito.value = ""
}

