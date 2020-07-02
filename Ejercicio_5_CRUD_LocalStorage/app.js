//*******************************************VARIABLES LOCALES*****************************************************

const formularioUI = document.querySelector('#formulario');
const listaActividadesUI = document.querySelector('#listaActividades');

let arrayActividades = [];

let item = {
    actividad: '',
    estado: false
}

//*********************************************FUNCIONES *********************************************************

const CrearItem = (actividad) => {

    let item = {
        actividad: actividad,
        estado: false
    }

    arrayActividades.push(item);

    return(item);
}

const GuardarDB = () => {

    localStorage.setItem('rutina', JSON.stringify(arrayActividades));

    PintarDB();
}

const PintarDB = () => {

    listaActividadesUI.innerHTML = '';

    arrayActividades = JSON.parse(localStorage.getItem('rutina'));
    
    if(arrayActividades === null){
        arrayActividades = [];
    }else{
        arrayActividades.forEach(element => {

            if(element.estado){
                listaActividadesUI.innerHTML += `<div class="alert alert-success" role="alert"><span class="material-icons float-left mr-2">accessibility_new</span><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><span class="material-icons">done</span><span class="material-icons">delete</span></span></div>`
            }else{
                listaActividadesUI.innerHTML += `<div class="alert alert-danger" role="alert"><span class="material-icons float-left mr-2">accessibility_new</span><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><span class="material-icons">done</span><span class="material-icons">delete</span></span></div>`
            }
        });
    }
}

const EliminarDB = (texto) => {

    let indexArray;

    arrayActividades.forEach((elemento, index) => {
        
        if(elemento.actividad === texto){
            indexArray = index
        }
    });

    arrayActividades.splice(indexArray,1);
    
    GuardarDB();
}

const EditarDB = (texto) => {
    //Sin llaves
   // let indexArray = arrayActividades.findIndex((elemento) => elemento.actividad === texto);

    //Con llaves
    let indexArray = arrayActividades.findIndex((elemento) => {
        return elemento.actividad === texto
    });
    
    arrayActividades[indexArray].estado = true;

    GuardarDB();
}

//***********************************************EVENTLISTENER********************************************************

formularioUI.addEventListener('submit', (e) => {

    e.preventDefault();

    let actividadUI = document.querySelector('#actividad').value;
    
    CrearItem(actividadUI);
    GuardarDB();

    formularioUI.reset();

});

document.addEventListener('DOMContentLoaded', PintarDB);

listaActividadesUI.addEventListener('click', (e) => {

    e.preventDefault();

    if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
        
        let texto = e.path[2].childNodes[1].innerHTML;

        if(e.target.innerHTML === 'delete'){
            //Acción de Eliminar

            EliminarDB(texto);

        }
        if(e.target.innerHTML === 'done'){
            //Acción de Editar
            
            EditarDB(texto);
        }
    }

});