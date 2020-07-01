var contenido = document.querySelector('#contenido')
    function magia() {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                console.log(data.results['0'])
                contenido.innerHTML = `
                    <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle">
                    <p>Nombre: ${data.results['0'].name.first}</p>
                `
            })
    }