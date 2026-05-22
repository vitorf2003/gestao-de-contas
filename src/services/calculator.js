export class Calculator {
    constructor(accountList, baseSalary) {
        this.accountList = accountList;
        this.baseSalary = baseSalary;
    }

    calculateTotalAccounts() {

        let totalValue = 0;

        for(let value of this.accountList) {
            totalValue = Number.parseFloat(value.valor) + totalValue;
        }

        return `${totalValue.toFixed(2)}`;

    }

    calculateRemainderSalary() {
        
        let totalValue = parseFloat(this.calculateTotalAccounts());
        let remainingSalary;

        remainingSalary = this.baseSalary - totalValue;

        return `${remainingSalary.toFixed(2)}`;
    }
}