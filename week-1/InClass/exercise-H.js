function calculo(nombre,edad){
    let anio= 2021
    let nacimiento= anio-edad
    let saludo=`Hola mi nombre es ${nombre} y naci en el año ${nacimiento}`
    return saludo
}

console.log(calculo("wendy",33));
