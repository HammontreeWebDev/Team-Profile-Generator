const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        this.officenumber = officenumber;
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNum() {
        return this.officenumber;
    }
}

module.exports = Manager;