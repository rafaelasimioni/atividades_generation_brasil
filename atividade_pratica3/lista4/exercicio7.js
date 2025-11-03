import readline from 'readline-sync'
let vetor = [2,5,1,3,4,9,7,8,10,6]

//qual numero a pessoa quer
//mostrar a posicao dele

let numero = readline.questionInt("Qual numero voce deseja: ")
let encontrado = false;

for(let i = 0; i< vetor.length; i++){
    if (vetor[i] === numero){
        console.log(`O número ${numero} está na posição ${i}`)
        encontrado = true;
    }

}

if (encontrado == false){
    console.log(`O número ${numero} não está no vetor`)
}