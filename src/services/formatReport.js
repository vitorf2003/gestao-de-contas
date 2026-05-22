import { FormatDate } from "./formatDate.js";

export class FormatReport {
  constructor(report, currentDate, name, baseSalary, accountList, totalValueOfBills, remainderOfSalary) {
    this.report = report;
    this.date = currentDate;
    this.name = name;
    this.baseSalary = baseSalary;
    this.accountList = accountList;
    this.totalValueOfBills = totalValueOfBills;
    this.remainderOfSalary = remainderOfSalary;
  }

  format() {
    const stringNova = [];
    const formatDate = new FormatDate(this.date)

    for (let stringFormatada of this.report) {
      if (stringFormatada.Relatorio_gerado_em) {
        stringNova.push(`--------------=[ Relatório ]=--------------\n`,
            `Gerado em: ${formatDate.formatReportDate()}\n`);
      }
      if (stringFormatada.Nome) stringNova.push(`Nome: ${this.name}`);
      if (stringFormatada.Salario_Liquido)
        stringNova.push(`Salário líquido: ${this.baseSalary.toFixed(2)} R$`);

      if (stringFormatada.Contas_a_pagar) {
        stringNova.push(`Contas a pagar:`);
        for (let stringFormatada of this.accountList) {
          if (stringFormatada.conta && stringFormatada.valor) {
            stringNova.push(
              `\n- Conta: ${stringFormatada.conta}`,
              `- Valor: ${stringFormatada.valor} R$`,
              `- Data: ${stringFormatada.data}`
            );
          }
        }
      }

      if (stringFormatada.Soma_total_das_contas) {
        stringNova.push(`\nSoma total das contas: ${this.totalValueOfBills} R$`);
      }
      if (stringFormatada.Restante_do_salario) {
        stringNova.push(`Restante do salário: ${this.remainderOfSalary} R$\n`, 
            `--------------------------------------------`);
      }
    }

    return `${stringNova.join("\n")}`;
  }
}
