export class FormatDate {
    constructor(currentDate) {
        this.currentDate = currentDate;
    }

    createZero(num) {
        return num >= 10 ? num : `0${num}`;
    }

    formatReportDate() {
        const day = this.createZero(this.currentDate.getDate());
        const month = this.createZero(this.currentDate.getMonth() + 1);
        const year = this.createZero(this.currentDate.getFullYear());
        const hour = this.createZero(this.currentDate.getHours());
        const minute = this.createZero(this.currentDate.getMinutes());
        const second = this.createZero(this.currentDate.getSeconds());

        return `${day}/${month}/${year} - ${hour}:${minute}:${second}`;
    }
}