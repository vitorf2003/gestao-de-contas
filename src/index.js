import rl from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import path from "path";
import { Calculator } from "./services/calculator.js";
import { createFile } from "./services/createFile.js";
import { FormatDate } from "./services/formatDate.js";
import { FormatReport } from "./services/formatReport.js";

const readline = rl.createInterface({ input, output });

async function main() {

    try {
        let name;
        let baseSalary;
    
        console.log("-----=[ Gestão de Contas ]=-----\n");
    
        name = await readline.question("Digite um nome:\n");
        console.log(" ");
    
        baseSalary = parseFloat(await readline.question("Digite o valor do salario (líquido):\n"));
        if(Number.isNaN(baseSalary)){
            console.log(" ");
            console.log("Erro. O valor do salário deve ser apenas numérico.");
            console.log("Digite os dados novamente.");
            console.log(" ");
            return main();
        }
    
        console.log(" ");
    
        let accountList = [];
        let accountName;
        let accountValue;
        let accountDate;
        
        while(true) {
            
            console.log("Digite o nome, o valor e a data(opcional) da conta para adicionar a lista, (Para finalizar, digite 'sair').");
            console.log("Para a data(opcional) digite neste formato de exemplo: 20/05/2026.\n");
    
            accountName = await readline.question("Conta:\n");
            if(accountName === "sair") break;
            console.log(" ");
    
            accountValue = parseFloat((await readline.question("Valor:\n")).trim());
            if(Number.isNaN(accountValue)) {
                console.log(" ");
                console.log("Erro. O valor da conta deve ser apenas numérico.");
                console.log("Digite os dados da conta novamente.");
                console.log(" ");
                continue;
            }
            console.log(" ");

            accountDate = await readline.question("Data:\n");
            console.log(" ");
    
            accountList.push({ conta: accountName, valor: accountValue.toFixed(2), data: accountDate });
        }
    
        const calculator = new Calculator(accountList, baseSalary);

        const currentDate = new Date();
        const formatDate = new FormatDate(currentDate);
    
        const totalValueOfBills = calculator.calculateTotalAccounts();
        const remainderOfSalary = calculator.calculateRemainderSalary();
        const filePath = path.resolve('./outputs/', 'relatorio.txt');
    
        const report = [
            {   
                Relatorio_gerado_em: formatDate.formatReportDate(),
                Nome: name,
                Salario_Liquido: baseSalary.toFixed(2),
                Contas_a_pagar: accountList,
                Soma_total_das_contas: totalValueOfBills,
                Restante_do_salario: remainderOfSalary
             }
        ];

        const formatReport = new FormatReport(report, currentDate, name, baseSalary, accountList, totalValueOfBills, remainderOfSalary);
    
        createFile(filePath, formatReport.format());
    
        console.log(" ");
        console.log("--------------=[ Relatório ]=--------------");
        console.log(" ");
        console.log(`Gerado em: ${formatDate.formatReportDate()}`);
        console.log(`Nome: ${name}`);
        console.log(`Salário líquido: ${baseSalary.toFixed(2)} R$`);
        console.log('Contas a pagar:');
        console.log(accountList);
        console.log(`Valor total das contas: ${calculator.calculateTotalAccounts()} R$.`);
        console.log(`Restante do salário: ${calculator.calculateRemainderSalary()} R$.`);
        console.log(" ");
        console.log("--------------------------------------------");
        console.log(" ");
        console.log('Arquivo "relatorio.txt" gerado com sucesso.');
        console.log(" ");
        console.log("--------------------------------------------");
        console.log(" ");
    
        readline.close();
    } catch(error) { 
        console.log("Houve um erro na aplicação.");
    }

}

main();