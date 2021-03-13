//Item 3 Ejercitación


//fetch get realizo consulta    
fetch("https://api.giphy.com/v1/gifs/random?api_key=ycpvPJY4HY4tgjD5g27HWLoFv9STN213&tag=&rating=g")
    //retorno .json()
    .then(function (response) {
        return response.json()
    })
    //obtengo el resultado final
    .then(function (resultadoFinal) {
        //guardo en variables nombre y url
        let nombreGif = resultadoFinal.data.title
        let urlGif = resultadoFinal.data.image_url

        //capturo h1 y le agrego info
        document.querySelector('h1').innerHTML = nombreGif

        //capturo img
        let capturaImg = document.querySelector('img')
        //a la captura de la imagen le agrego un atributo, y le doy como valor la url de la imagen
        capturaImg.setAttribute('src', urlGif)


        //capturo boton
        let boton = document.querySelector('button')

        //le agrego un evento de click al botón
        boton.addEventListener('click', function () {

            //fetch get realizo consulta    
            fetch("https://api.giphy.com/v1/gifs/random?api_key=ycpvPJY4HY4tgjD5g27HWLoFv9STN213&tag=&rating=g")
                //retorno .json()
                .then(function (response) {
                    return response.json()
                })
                //obtengo el resultado final
                .then(function (resultadoFinal) {
                    //guardo url nueva
                    let urlGif = resultadoFinal.data.image_url
                    //al hacer click seteo otro gif
                    capturaImg.setAttribute('src', urlGif)
                })

        })

    })
    //por si hay errores
    .catch(function (err) {
        console.log(err)
    })



