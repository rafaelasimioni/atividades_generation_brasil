import readline from 'readline-sync'

let numero1 = readline.questionFloat("Digite o primeiro numero: ");
let numero2 = readline.questionFloat("Digite o segundo numero: ");


console.log("----OPERAÇÕES----\n",
    "1- SOMA\n",
    "2- SUBTRAÇÃO\n",
    "3- MULTIPLICAÇÃO\n",
    "4- DIVISÃO\n"
);

let opcao = readline.questionInt("Qual a sua opcao: ");


switch(opcao){
    case 1:
        let soma = numero1 + numero2;
        console.log(`${numero1} + ${numero2} = ${soma}`);
    break
     case 2:
        let subtracao = numero1 - numero2;
        console.log(`${numero1} - ${numero2} = ${subtracao}`);
    break
     case 3:
        let multiplicacao = numero1 * numero2;
        console.log(`${numero1} * ${numero2} = ${multiplicacao}`);
    break
     case 4:
        let divisao = numero1 / numero2;
        console.log(`${numero1} / ${numero2} = ${divisao}`);
    break
    default:
        console.log("Opção inexistente")
}
  