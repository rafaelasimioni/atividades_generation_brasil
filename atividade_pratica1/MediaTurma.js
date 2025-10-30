import readline from 'readline-sync'

let nota1 = 0;
let nota2 = 0;
let nota3 = 0;
let nota4 = 0;

nota1 = readline.questionFloat("Digite a primeira nota: ");
nota2 = readline.questionFloat("Digite a segunda nota: ");
nota3 = readline.questionFloat("Digite a terceira nota: ");
nota4 = readline.questionFloat("Digite a quarta nota: ");

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`Média final: ${media.toFixed(1)}`);
