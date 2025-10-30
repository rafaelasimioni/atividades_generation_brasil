import readline from 'readline-sync'

let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;

n1 = readline.questionFloat("Digite o primeiro numero: ")
n2 = readline.questionFloat("Digite o segundo numero: ")
n3 = readline.questionFloat("Digite o terceiro numero: ")
n4 = readline.questionFloat("Digite o quarto numero: ")

let diferencaProduto = (n1 * n2) - (n3 * n4)

console.log(`Diferença ${diferencaProduto.toFixed(1)}`)