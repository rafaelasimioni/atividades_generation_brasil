import readline from 'readline-sync'
//ler 3 valores inteiros
// a + b se é maior, menor ou igual a c
let a = readline.questionInt("Digite o valor a) ")
let b = readline.questionInt("Digite o valor b) ")
let c = readline.questionInt("Digite o valor c) ")

let soma = a + b

if(soma > c){
    console.log(`A soma de ${a} + ${b} = ${soma}\nÉ maior que c que é:  ${c}`)
}
else if(soma < c){
    console.log(`A soma de ${a} + ${b} = ${soma}\nÉ menor que c que é: ${c}`)
}
else{
    console.log(`A soma de ${a} + ${b} = ${soma}\nÉ igual a c que é:  ${c}`)
}
