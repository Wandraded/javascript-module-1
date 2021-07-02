var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function grito(nombre){
    const nombreMayuscula = nombre.toUpperCase()
    const mensaje = `Hola ${nombreMayuscula}`
    return mensaje
}

console.log(grito(mentor1))
console.log(grito(mentor2))
console.log(grito(mentor3))
console.log(grito(mentor4))
console.log(grito(mentor5))

