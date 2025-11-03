import readline from 'readline-sync'

let contiua = true;
let menor21 = 0
let maior50 = 0;
let continua = readline.keyInYN("Deseja registrar uma idade? ");

while (continua){
    let idade = readline.questionInt("Qual a sua idade: ");

     if (idade < 21 && idade > 0){
        menor21 +=1;

    }else if (idade > 50){
        maior50 +=1;
    }

    continua = readline.keyInYN("Deseja registrar mais uma? ");
   
}

console.log(`Total de pessoas menores de 21 anos: ${menor21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maior50}`);