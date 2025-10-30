import readline from 'readline-sync'

let salarioBruto = 0;
let adicionalNoturno = 0;
let horasExtras = 0;
let descontos = 0;


salarioBruto = readline.questionFloat("Digite seu salario: ");
adicionalNoturno = readline.questionFloat("Digite seu adicional noturno: ");
horasExtras = readline.questionFloat("Quanto recebe de hora extra: ");
descontos = readline.questionFloat("Quanto foi seu desconto: ");

let salarioLiquido = (salarioBruto + adicionalNoturno + (horasExtras * 5)) - descontos;

console.log(`Salário Líquido: ${salarioLiquido.toFixed(2)}`);