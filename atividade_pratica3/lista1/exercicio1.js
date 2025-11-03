import readline from 'readline-sync'

let lista = [];
for (let i = 1; i<=2; i++){
    
   let numero = readline.questionInt(`Digite o ${i} numero: `);

   lista.push(numero);
}

if (lista[0] > lista[1]){
    console.log("Primeiro número deve ser menor. Faça novamente!")
}

//No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5

else{
    for (let i = lista[0]; i <= lista[1]; i++){
        if (i % 3 == 0  && i % 5 == 0){
            console.log(i);
        }
    }
}




