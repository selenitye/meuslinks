function toggleMode() {
  const html = document.documentElement
 html.classList.toggle('light')

 // if(html.classList.contains('light')) {
 //   html.classList.remove('ligth')
 // } else {
 //   html.classList.add('light')
 // }
 
 // pegar a tag img
 const img = document.querySelector("#profile img")
 // se tiver light, add a imagem light
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/perfil_ligth.png')
  } else {
    // se tiver dark, manter a imagem
    img.setAttribute("src", "./assets/perfil_dark.png")
  }

}