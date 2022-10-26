const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('getName', () => {
        it('should return the name of the Manager', () => {
            const addEmployee = 'Brenda';
            const result = new Manager(addEmployee).getName();
            expect(result).toBe(addEmployee);
        })
    })
    describe('getId', () => {
        it('should return the Id of the Manager', () => {
            const addId = '5';
            const result = new Manager('',addId).getId();
            expect(result).toBe(addId);
        })
    })
    describe('getEmail', () => {
        it('should return the Email of the Manager', () => {
            const addEmail = 'TDD_Rocks@ucf.edu';
            const result = new Manager('','',addEmail).getEmail();
            expect(result).toBe(addEmail);
        })
    })
    describe('getRole', () => {
        it('should return the Role of the Manager', () => {
            const thisRole = 'Manager';
            const result = new Manager().getRole();
            expect(result).toBe(thisRole);
        })
    })
    describe('getOfficeNum', () => {
        it('should return the office number of the Manager', () => {
            const addOffice = '34565';
            const result = new Manager('','','',addOffice).getOfficeNum();
            expect(result).toBe(addOffice);
        })
    })
})