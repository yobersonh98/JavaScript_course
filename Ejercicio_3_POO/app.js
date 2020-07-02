const PeliculaUno = {
    //Esto es un objeto de la forma objetos literales
    nombre: 'Harry Potter',
    id: 01,
    reproducir(){
        return `Reproduciendo Pelicula... ${this.nombre}`
    }

}
//Clase
class Pelicula {
    //Constructor(PARAMETROS,PARAMETROS...)
    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
    }
//metodos... Las funciones en POO se suelen llamar metodos
    reproducir(){
        return `Reproduciendo Pelicula ${this.nombre}`
    }

}
//Herencia de los metodos y propiedades de la clase Pelicula
class Serie extends Pelicula{

    constructor(nombre, id, cap){
        //Palabra reservada Super para señalar que se estan heredando o extendiendo el nombre y el id de la clase Pelicula
        super(nombre,id);
        this.cap = cap;
    }

    reproducirCap(){
        return `Reproduciendo Capitulo ${this.cap} de ${this.nombre}`
    }

}

//Instancia de los objetos  
const peliculaUno = new Pelicula('Harry Potter', 1);
const peliculaDos = new Pelicula('Star Wars', 2);

const serieUno = new Serie('Dark', 3, 1);

console.log(peliculaUno.reproducir());
console.log(peliculaDos.reproducir());
console.log(serieUno.reproducirCap());