function adicionarVideo() {
  var listaVideosNaTela = document.querySelector('#video')
  var listaVideosFavorito = listaVideosNaTela.value
  var listaVideosFavoritoEmbed = listaVideosFavorito.replace("watch?v=", "embed/")
  if (listaVideosFavoritoEmbed.length > 41) {
    listaVideosFavoritoEmbed = listaVideosFavoritoEmbed.substring(0, 41)
  }
  if (validarUrl(listaVideosFavoritoEmbed)) {
    listarVideosNaTela(listaVideosFavoritoEmbed)
  } else {
    alert("Url inválida!!!")
  }
  listaVideosNaTela.value = ""
}

function listarVideosNaTela(videos) {
  var listaVideo = document.querySelector('#listaVideos')
  var elementoVideo = "<iframe width='560' height='315' src='" + videos + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
  listaVideo.innerHTML = listaVideo.innerHTML + elementoVideo
}

function validarUrl (url) {
  var urlValida = url.startsWith('embed', 24)
  return urlValida
}

function limparVideo () {
  var listaVideos = document.querySelector('#listaVideos')
  listaVideos.innerHTML = ""
}
