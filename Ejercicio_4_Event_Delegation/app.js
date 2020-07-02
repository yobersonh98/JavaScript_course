//Variables globales

const Btnbotones = document.querySelector('#Btnbotones');
const botones = document.querySelector('#botones');
const fondo = document.querySelector('#fondo');

//Funciones IIFE
(() => {

    Btnbotones.addEventListener('click', agregarBotones);
    botones.addEventListener('click', delegacion);

})();

(() => {
    const color = localStorage.getItem('colorFondo');

    if(color === null){
        fondo.className = 'bg-dark';
    }else{
        fondo.className = color;
    }
})();
function delegacion(e){
    e.preventDefault();
    
    const colorBoton = e.target.classList[1];

    switch(colorBoton){
        case ('btn-primary'):
            fondo.className = 'bg-primary';
            localStorage.setItem('colorFondo','bg-primary');
            break;

        case ('btn-secondary'):
            fondo.className = 'bg-secondary';
            localStorage.setItem('colorFondo','bg-secondary');
            break;
        
        case ('btn-danger'):
            fondo.className = 'bg-danger';
            localStorage.setItem('colorFondo','bg-danger');
            break;

        case ('btn-success'):
            fondo.className = 'bg-success';
            localStorage.setItem('colorFondo','bg-success');
            break;

        case ('btn-warning'):
            fondo.className = 'bg-warning';
            localStorage.setItem('colorFondo','bg-warning');
            break;
    }
}

function agregarBotones(e){

    e.preventDefault();
    
    botones.innerHTML = `
    
        <button class="btn btn-primary mt-5">primary</button>
        <button class="btn btn-secondary mt-5">secondary</button>
        <button class="btn btn-danger mt-5">danger</button>
        <button class="btn btn-success mt-5">success</button>
        <button class="btn btn-warning mt-5">warning</button>

    `

}

//Local Storage... Guarda cadenas de texto, clave => valor
//SET => Guardando
//GET => Obtener

/* const nombre = 'Yoberson';
localStorage.setItem('nombreUsuario', nombre); */