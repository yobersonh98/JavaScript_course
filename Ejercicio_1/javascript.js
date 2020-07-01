var contenido = document.querySelector('#contenido')
    function magia() {
        fetch('./archivo.txt')
            .then(data => data.text())
            .then(data => {
                console.log(data)

                contenido.innerHTML = `<h2>${data}<h2>`
            })
    }