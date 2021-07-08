function sentimientos(mensaje) {
    if (mensaje == "happy") {
        return "Good job, you're doing great!"
    } else if (mensaje == "sad") {
        return "Every cloud has a silver lining"
    }else if(typeof mensaje=="number"){
        return "Beep beep boop"
    }else{
        return "I'm sorry, I'm still learning about feelings!"
    }
}

console.log(sentimientos("happy"));
console.log(sentimientos("sad"));
console.log(sentimientos(3));
console.log(sentimientos("8"));

