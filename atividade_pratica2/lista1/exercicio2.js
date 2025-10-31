import readline from 'readline-sync'
//numero par e positivo ou impar e negativo
let numero = readline.question("Digite um numero: ")

if (numero >=0  && numero % 2 == 0){
    console.log(`O número ${numero} é par e positivo`)
}
if (numero >=0  && numero % 2 != 0){
    console.log(`O número ${numero} é ímpar e positivo`)
}
if (numero <0  && numero % 2 == 0){
    console.log(`O número ${numero} é par e negativo`)
}
if (numero <0  && numero % 2 != 0){
    console.log(`O número ${numero} é ímpar e negativo`)
}

