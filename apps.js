const cadenaJSON = '{Modelo:"Camaro", Color:Negro,Marca:"Chevrolet"}';
const carro = JSON.parse(cadenaJSON)
console.log(carro)

const libro={ titulo:"Los pilares de la Tierra",autor:"Ken Follett",genero:"Histórico",añoPublicacion:"1989",editorial:"William Morrow"}

function mostrarDetallesLibro({titulo, autor, genero, añoPublicacion, editorial}) {
    console.log("Detalles del libro:");
    console.log("Título: " + titulo);
    console.log("Autor: " + autor);
    console.log("Género: " + genero);
    console.log("Año de publicación: " + añoPublicacion);
    console.log("Editorial: " + editorial);
    }

mostrarDetallesLibro(libro);

const {titulo, autor, genero, añoPublicacion, editorial}=libro ;
console.log("Detalles del libro:");
console.log( titulo);
console.log( autor);
console.log( genero);
console.log( añoPublicacion);
console.log( editorial);
