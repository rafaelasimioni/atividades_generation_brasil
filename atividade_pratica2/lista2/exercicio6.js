import readline from 'readline-sync'

let nome = readline.question("Nome do(a) colaborador(a): ");
let cargo = readline.questionInt("Codigo do cargo: ");
let salario = readline.questionFloat("Salario: ");

switch(cargo){
    case 1:
        let salarioGerente = salario + (salario * 0.10);
        console.log(`Nome do(a) colaborador(a): ${nome}\nCargo: Gerente\nSalário: R$${salarioGerente.toFixed(2)}`);
    break
    case 2:
        let salarioVendedor = salario + (salario * 0.07);
        console.log(`Nome do(a) colaborador(a): ${nome}\nCargo: Vendedor\nSalário: R$${salarioVendedor.toFixed(2)}`);
    break
    case 3:
        let salarioSupervisor = salario + (salario * 0.09);
        console.log(`Nome do(a) colaborador(a): ${nome}\nCargo: Supervisor\nSalário: R$${salarioSupervisor.toFixed(2)}`);
    break
    case 4:
        let salarioMotorista = salario + (salario * 0.06);
        console.log(`Nome do(a) colaborador(a): ${nome}\nCargo: Motorista\nSalário: R$${salarioMotorista.toFixed(2)}`);
    break
    case 5:
        let salarioEstoquista = salario + (salario * 0.05);
        console.log(`Nome do(a) colaborador(a): ${nome}\nCargo: Estoquista\nSalário: R$${salarioEstoquista.toFixed(2)}`);
    break
    case 6:
        let salarioTecnicoDeTi = salario + (salario * 0.08);
        console.log(`Nome do(a) colaborador(a): ${nome}\nCargo: Técnico de TI\nSalário: R$${salarioTecnicoDeTi.toFixed(2)}`);
    break
    default:
        console.log("Não existe esse cargo")

}