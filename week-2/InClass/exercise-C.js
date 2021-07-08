function numberChecker(num) { //una funcion que recibe un numero 
  if (num > 20) { //verifica si el numero es mayor que 20
    return `${num} is greater than 20`; //si el numero es mayor que 20 muestra este mensaje
  } else if (num === 20) { //verifica si el numero es extrictamente igual que 20
    return `${num} is equal to 20`;
  } else if (num < 20) { //verifica si es menor que 20
    return `${num} is less than 20`;
  } else { //si no cumple con las condiciones anteriores se imprime este mensaje.//
    return `${num} isn't even a number :(`;
  }
}