let cuantoVer = prompt("Cuantos resultados queres ver")


//Item 4 Ejercitación

    //realizo un fetch buscando una Url y pongo la variable de cuanto quiere buscar
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=k2NiIgPnqWYbm1rjm7z05JP4AHDHu9Xw&limit=' + cuantoVer + '&rating=g')
    .then(function(response) {
        return response.json()
    })
    //Obtengo el resulado final
    .then(function(resultadoFinal) {
        console.log(resultadoFinal.data)
        //realizo un for of para a cada elemento me muestre la imagen y titulo
        for (elemento of resultadoFinal.data) {
           let titleGif = elemento.title
           let urlGif = elemento.images.original.url

           //creo h1s 
           let h1 = document.createElement('h1')

           //inserto texto al h1
           h1.innerHTML += titleGif + " "

           //lo pongo lo que cree dentro de la case contenedor
           document.querySelector('.contenedor').appendChild(h1)

           //creo un imagenes
           let imagenes = document.createElement('IMG')
            //inserto el atrubuto a la imagen
           imagenes.setAttribute('src', urlGif)
            //lo pongo lo que cree dentro de la clase contenedor
           document.querySelector('.contenedor').appendChild(imagenes)
        }
    })




