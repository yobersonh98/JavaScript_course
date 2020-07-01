var contenido = document.querySelector('#contenido')

function traer(){
    fetch('./tabla.json')
        .then( res => res.json())
        .then( data => {
            //console.log(data)
            tabla(data)
        })
}

function tabla(data){
    console.log(data)
    contenido.innerHTML = ``

    for(let valor of data){
        //console.log(valor)
        contenido.innerHTML += `
        <tr>
            <th scope="row">${valor.id}</th>
            <td>${valor.nombre}</td>
            <td>${valor.correo}</td>
            <td>${valor.estado ? "Activo" : "Eliminado"}</td>
        </tr>
        `
    }
}