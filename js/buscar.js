//Item 5 Ejercitación

//utilizo funcion new UrlSearchParamas con location.search que me brinda muchos metodos para poder trabajar.
let locationSearch = new URLSearchParams(location.search)

//guardo en una variable lo que escribio el usuario utilizando el name de nombre busqueda del input
let loQueEscribio = locationSearch.get('busqueda')
//guardo en una variable lo que escribio el usuario utilizando el name de nombre cantidad del input
let cantidadDeGifs = locationSearch.get('cantidad')

//Reemplazo en lo que quiero buscar y en limite de la api por las variables
fetch('https://api.giphy.com/v1/gifs/search?api_key=k2NiIgPnqWYbm1rjm7z05JP4AHDHu9Xw&q=' + loQueEscribio + '&limit=' + cantidadDeGifs + '&offset=0&rating=g&lang=en')
    .then(function (response) {
        return response.json()
    })
    .then(function (resultadoFinal) {

        //creo un ol
        let listaOrdenada = document.createElement('ol')
        //le agrego una clase a ese ol
        listaOrdenada.classList.toggle('ol')
        //pongo dentro del selector que tengo una clase con listaOrdenada la ol
        document.querySelector('.listaOrdenada').appendChild(listaOrdenada)

        
       
         for (elemento of resultadoFinal.data) {

            //CICLO FOR

            //guardo de cada elemento el titulo
            let tituloGif = elemento.title
            //guardo de cada elemento la url de la imagen
            let imagenGif = elemento.images.original.url


            //creo un li 
            let listaElemento = document.createElement('li')
            //le agrego la clase li a cada una de las listas
            listaElemento.classList.toggle('li')
            //seleccion la ol y le pongo la li adentro
            document.querySelector('.ol').appendChild(listaElemento)


            //creo h2
            let h2 = document.createElement('h2')
            //le agrego texto html
            h2.innerHTML = tituloGif


            //creo imagen
            let imagen = document.createElement('img')
            //le seteo atributo src y el valor de lo que me trae la api en url
            imagen.setAttribute('src', imagenGif)


             //creo los iconos
             let iconos = document.createElement('i')
             iconos.setAttribute('id', elemento.id)
             iconos.classList.add('fas', 'fa-star')


            //guardo a todas las li en una variabble
            let todasLi = document.querySelectorAll('.li')



            //hago for
            for (let i = 0; i < todasLi.length; i++) {
            //coloco una condicion que solamente meta el h2 y la imagen y los iconos dentro de li si esta esta vacia.    
               if (todasLi[i].innerHTML == "") {
                todasLi[i].appendChild(iconos)
                todasLi[i].appendChild(h2)
                todasLi[i].appendChild(imagen)
               }
            }
        }

       //busco todas las i 
       let todaslasI = document.querySelectorAll('i')

       //declaro un array vacio
       let array = []

       //Hago un For
       for(cadaI of todaslasI) {
       //Hago que cada vez que se toca en una I    
        cadaI.addEventListener('click', function() {  
          //le doy valor a clickeados con un array que contenga la id del boton clikeado   
          array.push(this.id) //agrego esa info
          //paso a string el array
          let arrayString = JSON.stringify(array)
          //seteo el local storage con el nombre valorId y el valor del array pasado a string
          localStorage.setItem('valorId', arrayString)
        }) 
       }

 

      


    })
    .catch(function (err) {
        console.log(err)
    })