//Variables
var arcoiris = true
const pi = 3.14
let nombre = "juan"

//Condicionales
if (arcoiris) {
    console.log("Hay un arcoiris")
}

switch (pi) {
    case 3.14:
        console.log("Pi es correcto")
        break;
    default:
        console.log("Pi es incorrecto")
        break;
}

// Bucles
for (let i = 0; i < 10; i++) {
    console.log("Faltan " + 10-i + " pa las 12");
}

while (arcoiris == false) {
    console.log("Esperando arcoiris")
}

do {
    console.log("Oh mira un arcoiris")
} while (arcoiris);

// Funciones
function suma(a, b) {
    return a + b
}
console.log(suma(1, 2))

function nombre(nom) {
    console.log("hola" + nom)
}
nombre("Pepe")

// Alert
alert("Buenos dias")