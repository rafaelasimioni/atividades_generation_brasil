import readline from 'readline-sync'
console.log(
    "MENU\n",
    "1 - CACHORRO QUENTE\n",
    "2 - X-SALADA\n",
    "3 - X-BACON\n",
    "4 - BAURU\n",
    "5 - REFRIGERANTE\n",
    "6 - SUCO DE LARANJA\n"
    
)

let opcao = readline.questionInt("Codigo do produto: ")
let quantidade = readline.questionInt("Quanto(s): ")

switch(opcao){
    case (1):
        let cachorroQuente = 10.00 * quantidade
        console.log(`Produto : CACHORRO QUENTE\n Total: R$${cachorroQuente.toFixed(2)}`)
    break
    case (2):
        let xSalada = 15.00 * quantidade
        console.log(`Produto : X-SALADA\nTotal: R$${xSalada.toFixed(2)}`)
    break
    case (3):
        let xBacon = 18.00 * quantidade
        console.log(`Produto : X-BACON\nTotal: R$${xBacon.toFixed(2)}`)
    break
    case (4):
        let bauru = 12.00 * quantidade
        console.log(`Produto : BAURU\nTotal: R$${bauru.toFixed(2)}`)
    break
    case (5):
        let refrigerante = 8.00 * quantidade
        console.log(`Produto : REFRIGERANTE\nTotal: R$${refrigerante.toFixed(2)}`)
    break
    case (6):
        let sucoDeLaranja = 13.00 * quantidade
        console.log(`Produto : SUCO DE LARANJA\nTotal: R$${sucoDeLaranja.toFixed(2)}`)
    break
    default:
        console.log("Opção fora do Menu")

}