import readline from 'readline-sync'

let para = true;
let contPositivos = 0;
let soma = 0;
let positivos = [];

do {
   let numero = readline.questionInt("Digite um numero: ");

   if (numero > 0){
        contPositivos+=1;
        positivos.push(numero);
        soma += numero 
    }    
    else if (numero === 0){
        para = false;}
}

while(para);

console.log("Você digitou o número 0 e essa era a condição de parada");
console.log(`O total de números positivos foram ${contPositivos}`);
console.log(`A soma dos números deram: ${soma}`);
