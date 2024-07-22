
// respuesta 1

let numero = parseInt(prompt("Por favor, ingrese un número:"));
let multiplicadores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i of multiplicadores) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

// respuesta 2

let acumulador = 0;
let numeroA;

do {
    numeroA = parseInt(prompt("Por favor, ingrese un número (0 para terminar):"));
    if (numeroA !== 0) {
        acumulador += numeroA;
        console.log(`Acumulado actual: ${acumulador}`);
    }
} while (numeroA !== 0);

console.log(`Total acumulado: ${acumulador}`);


//  respuesta3 


let numeroSecreto = 42;
let intentos = 0;
let encontrado = false;

while (!encontrado) {
    let numeroUsuario = parseInt(prompt("Ingresa un número entre 1 y 100:"));


    intentos++;

    if (numeroUsuario < numeroSecreto) {
        alert("El número ingresado es menor. Intenta de nuevo.");
    } else if (numeroUsuario > numeroSecreto) {
        alert("El número ingresado es mayor. Intenta de nuevo.");
    } else {
        encontrado = true;
    }
}

alert(`¡Felicitaciones! Adivinaste el número secreto ${numeroSecreto} en ${intentos} intentos.`);

// repuesta 4

function mod(dividendo, divisor) {
    return dividendo - Math.floor(dividendo / divisor) * divisor;
}

let numeroB = parseInt(prompt("Ingresa un número para verificar si es primo:"));

let esPrimo = true;

for (let i = 2; i <= numeroB / 2; i++) {
    if (mod(numeroB, i) === 0) {
        esPrimo = false;
        break;
    }
}

if (esPrimo) {
    console.log(numeroB + " es un número primo");
} else {
    console.log(numeroB + " no es un número primo");
}


// respuesta 5

let numeroC = parseInt(prompt("Ingresa un número para mostrar todos sus divisores:"));

let divisores = [];

for (let i = 1; i <= numeroC; i++) {
    if (numeroC % i === 0) {
        divisores.push(i);
    }
}

console.log("Los divisores de " + numeroC + " son: " + divisores.join(", "));


// respuesta 6 
let array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

for (let i = 0; i < array.length; i++) {
    console.log(`Elemento ${i}: ${array[i]}`);
}


// respuesta 7

let multi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of multi) {
    let doble = numero * 2;
    console.log(`Doble de ${numero} es ${doble}`);
}

// respuesta  8
let familia = [
    { nombre: "Juan", edad: 45, relacion: "padre", ocupacion: "ingeniero" },
    { nombre: "Ana", edad: 42, relacion: "madre", ocupacion: "doctora" },
    { nombre: "Carlos", edad: 18, relacion: "hijo", ocupacion: "estudiante" },
    { nombre: "Laura", edad: 15, relacion: "hija", ocupacion: "estudiante" },
    { nombre: "Marta", edad: 70, relacion: "abuela", ocupacion: "jubilada" }
];

for (let miembro of familia) {
    let mensaje = `Hola, soy ${miembro.nombre}, tengo ${miembro.edad} años, soy ${miembro.relacion} y trabajo como ${miembro.ocupacion}.`;
    console.log(mensaje);
}


// respuesta 9


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let numero of numeros) {
    if (numero % 2 !== 0) {
        if (numero < 5) {
            console.log(`${numero} es un número impar menor que 5.`);
        } else if (numero >= 5 && numero <= 7) {
            console.log(`${numero} es un número impar entre 5 y 7.`);
        } else {
            console.log(`${numero} es un número impar mayor que 7.`);
        }
    }
}

// repuesta 10

let paraPares = 0;
let paraimpares = 0;

while (true) {
    let input = prompt("Ingresa un número (0 para terminar):");

    let numero = parseInt(input, 10);

    if (numero === 0) {
        break;
    }

    if (numero % 2 === 0) {
        paraPares += numero;
    } else {
        paraimpares += numero;
    }
}

console.log(`Suma de números pares: ${paraPares}`);
console.log(`Suma de números impares: ${paraimpares}`);

// respuesta 11

let numerosD = [15, 22, 8, 31, 7, 45, 29, 10, 3, 18];

let numeroMasGrande = numerosD[0];

for (let i = 1; i < numerosD.length; i++) {
    if (numerosD[i] > numeroMasGrande) {
        numeroMasGrande = numerosD[i];
    }
}

console.log(`El número más grande en el array es ${numeroMasGrande}`);

// respuesta 12

let numerosE = [34, 7, 23, 32, 5, 62, 19, 43, 10, 8];

let numeroMasChico = numerosE[0];

for (let numero of numerosE) {
    if (numero < numeroMasChico) {
        numeroMasChico = numero;
    }
}
console.log("El número más chico es:", numeroMasChico);
