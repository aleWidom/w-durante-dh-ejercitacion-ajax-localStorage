
    
fetch('https://api.giphy.com/v1/gifs/random?api_key=ycpvPJY4HY4tgjD5g27HWLoFv9STN213&tag=&rating=g')
.then(function(respuesta) {
    respuesta.json()
})
.then(function(resultadoFinal) {
    console.log(resultadoFinal)
})
.catch(function(err) {
    console.log(err)
})


console.log("Hola")