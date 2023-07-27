function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('light'))  {

   // se tiver light mode, adicionar a imagem light
   img.setAttribute("src", "./assets/avatar-light.png")
   
   } else {
    // se river sem light mode, manter a imagem normal
  img.setAttribute("src", "./assets/avatar.png") 
  i
  }
}










// function toggleMode() {

//   let el = document.getElementById('ruan');
//   console.log(el)
//   console.log(el.className)
//   if( el.className === 'hydrated'){

//     el.classList.remove('hydrated');
//     el.classList.add('light');

//   } else {

//     el.classList.remove('light');
//     el.classList.add('hydrated');

//   }
  
// }