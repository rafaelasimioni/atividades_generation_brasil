import readline from 'readline-sync'

let salario = 0;
let abono = 1000.00;

salario = readline.questionFloat("Digite seu salario: ");

let novoSalario = salario + abono;

console.log(`Novo salário: ${novoSalario.toFixed(2)}`);