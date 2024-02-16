// Función para inicializar el juego
function inicializarJuego(palabra) {
    return {
        palabraOculta: palabra.split(''),
        letrasAdivinadas: Array(palabra.length).fill('_'),
        intentosRestantes: 6,
        letrasIncorrectas: []
    };
}

// Función para adivinar una letra
function adivinarLetra(juego, letra) {
    letra = letra.toLowerCase(); // Convertir la letra a minúscula

    // Verificar si la letra ya ha sido adivinada o está en las letras incorrectas
    if (juego.letrasAdivinadas.includes(letra) || juego.letrasIncorrectas.includes(letra)) {
        console.log(`Ya has intentado con la letra ${letra}. Intenta con otra.`);
        return;
    }

    // Verificar si la letra está en la palabra oculta
    if (juego.palabraOculta.includes(letra)) {
        juego.palabraOculta.forEach((letraPalabra, index) => {
            if (letraPalabra === letra) {
                juego.letrasAdivinadas[index] = letra;
            }
        });
    } else {
        juego.intentosRestantes--;
        juego.letrasIncorrectas.push(letra);
        console.log(`La letra ${letra} no está en la palabra. Te quedan ${juego.intentosRestantes} intentos.`);
    }

    // Mostrar estado actual del juego
    console.log(`Palabra: ${juego.letrasAdivinadas.join(' ')}`);
    console.log(`Letras incorrectas: ${juego.letrasIncorrectas.join(', ')}`);

    // Verificar si el juego ha terminado
    if (juego.intentosRestantes === 0) {
        console.log('¡Has perdido! La palabra era: ' + juego.palabraOculta.join(''));
    } else if (!juego.letrasAdivinadas.includes('_')) {
        console.log('¡Felicidades! ¡Has ganado!');
    }
}

// Ejemplo de uso del juego
const palabraSecreta = 'javascript';
const juego = inicializarJuego(palabraSecreta);

console.log('Bienvenido al Juego del Ahorcado');
console.log('Intenta adivinar la palabra.');
console.log(`Palabra: ${juego.letrasAdivinadas.join(' ')}`);

// Ejecutar el juego
adivinarLetra(juego, 'a');
adivinarLetra(juego, 't');
adivinarLetra(juego, 'z');
adivinarLetra(juego, 'j');
adivinarLetra(juego, 's');
adivinarLetra(juego, 'c');
adivinarLetra(juego, 'v');
adivinarLetra(juego, 'r');
adivinarLetra(juego, 'i');
adivinarLetra(juego, 'p');
adivinarLetra(juego, 'm');