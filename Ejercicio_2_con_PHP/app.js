var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('me diste un click')

    var datos = new FormData(formulario)

    console.log(datos)
    console.log(datos.get('usuario'))
    console.log(datos.get('pass'))

    fetch('post.php',{
        method: 'POST',
        body: datos
    })
        .then(res => res.json())
        .then( data => {
            console.log(data)
            if(data === 'Error'){
                respuesta.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        ¡Llena todo los campos!
                    </div>
                `
            }else{
                respuesta.innerHTML = `
                    <div class="alert alert-success" role="alert">
                        ${data}
                    </div>
                `
            }
        })
})