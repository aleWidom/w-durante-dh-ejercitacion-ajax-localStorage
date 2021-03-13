
//capturo primer h1
let capturaH1 = document.querySelector('h1')

//caputuro primer Ul
let capturaUl = document.querySelector('.gifs ul')

//declaro y le doy valor con lo que trae el localStorage
let local = localStorage.getItem('valorId')


//Si no existe un valor en el valorId del localStorage
if (localStorage.getItem('valorId') == null) {
    //creo un div le doy una clase y la pongo como hijo del h1 y le inserto un h4 que no hay gif seleccionados
    let creacionDiv = document.createElement('div')
    creacionDiv.classList.toggle('sinGifs')
    capturaH1.appendChild(creacionDiv)

    document.querySelector('.sinGifs').innerHTML = `<h4>No hay gif seleccionados como favoritos</h4>`
} 
//Si existe valor en el storage
else {
    //Se parsea lo que hay de valor en el storage (array) y se hace un for para recorrerlo e insertar una lista con el valor de cada indice del array cada vez que se itera
    let localParseado = JSON.parse(local)
   
     for (cadaGif of localParseado) {
        capturaUl.innerHTML += `<li>${cadaGif}</li>`
}
}


