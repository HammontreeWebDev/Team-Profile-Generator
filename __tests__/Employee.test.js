// Test Suite for Employee.js in lib
const Employee = require('../lib/Employee');
describe('Employee', () => {
    describe('getName', () => {
        it('should return the name of the employee', () => {
            const addEmployee = 'Brenda';
            const result = new Employee(addEmployee).getName();
            expect(result).toBe(addEmployee);
        })
    })
    describe('getId', () => {
        it('should return the Id of the employee', () => {
            const addId = '5';
            const result = new Employee('',addId).getId();
            expect(result).toBe(addId);
        })
    })
    describe('getEmail', () => {
        it('should return the Email of the employee', () => {
            const addEmail = 'TDD_Rocks@ucf.edu';
            const result = new Employee('','',addEmail).getEmail();
            expect(result).toBe(addEmail);
        })
    })
    describe('getRole', () => {
        it('should return the Role of the employee', () => {
            const thisRole = 'Employee';
            const result = new Employee().getRole();
            expect(result).toBe(thisRole);
        })
    })
});