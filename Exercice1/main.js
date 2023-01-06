//Première Partie
//fonction alerte hello world apres deux secondes
function sayHello() {
    alert( "hello world");
  }
  setTimeout(sayHello, 2000)


// Partie II
//ajout d'un nouveau paragraphe <p>Hello World</p>au fichier <div id="container">
//apres 2 secondes
const div = document.querySelector('#container')

function sayAddParagraphe() {
const paragraphe = document.createElement('p')
      paragraphe.innerHTML='<p>Hello World</p>'
      div.appendChild(paragraphe)
}
setTimeout(sayAddParagraphe, 2000)

// Partie III

// appel de la fonction toute les 2 secondes
const intervalle = setInterval( function sayAddParagraph() {
    paragraphe = document.createElement('p')
    paragraphe.innerHTML='<p>Hello World</p>'
    div.appendChild(paragraphe)
}, 2000);

//effacer l'interval lorque le boutton est appuyé
const button = document.querySelector('#clear')
button.addEventListener('click',()=>{
    clearInterval(intervalle)// a régler
}); 


// Au lieu de cliquer sur le bouton, l'intervalle sera effacé (c'est-à-dire clearInterval)
//  dès qu'il y aura 5 paragraphes à l'intérieur du <div id="container">

// if (div.childElementCount == 5) {
//    clearInterval(intervalle)
// }    
// div.innerHTML = div.childElementCount;

 //appel de la fonction pour l'arret automatique si le nombre de paragraphe est de 5