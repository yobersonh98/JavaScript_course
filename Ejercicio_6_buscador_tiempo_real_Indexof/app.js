const productos = [
    {nombre: 'Platanos', valor: 500},
    {nombre: 'Pera', valor: 500},
    {nombre: 'Papa', valor: 500},
    {nombre: 'Fresa', valor: 500},
    {nombre: 'Patilla', valor: 500},
]


const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');


const filtrar = () => {
    //console.log(formulario.value);

    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase();

    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase();

        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
                <li>${producto.nombre} - Valor: ${producto.valor}</li>
            `
        }
    }

    if(resultado.innerHTML === ''){
        resultado.innerHTML += `
            <li>Producto no encontrado ...</li>
        `
    }
}

boton.addEventListener('click', filtrar);

formulario.addEventListener('keyup', filtrar);

filtrar();