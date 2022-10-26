// Test file for Employee class located in lib
const Employee = require('../lib/Employee');
describe('Employee', () => {
    describe('getName', () => {
        it('should return the name of the employee', () => {
            const addEmployee = 'Brenda'
            const result = new Employee(addEmployee).getName();
            expect(result).toBe(addEmployee);
        })
    })
})