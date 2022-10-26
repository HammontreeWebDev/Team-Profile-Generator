// Test Suite for Intern.js in lib
const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('getName', () => {
        it('should return the name of the employee', () => {
            const addEmployee = 'Brenda';
            const result = new Intern(addEmployee).getName();
            expect(result).toBe(addEmployee);
        })
    })
    describe('getId', () => {
        it('should return the Id of the employee', () => {
            const addId = '5';
            const result = new Intern('',addId).getId();
            expect(result).toBe(addId);
        })
    })
    describe('getEmail', () => {
        it('should return the Email of the employee', () => {
            const addEmail = 'TDD_Rocks@ucf.edu';
            const result = new Intern('','',addEmail).getEmail();
            expect(result).toBe(addEmail);
        })
    })
    describe('getRole', () => {
        it('should return the Role of the employee', () => {
            const thisRole = 'Intern';
            const result = new Intern().getRole();
            expect(result).toBe(thisRole);
        })
    })
    describe('getSchool', () => {
        it('should return the name of the school the intern is attending', () => {
            const addSchool = 'UCF';
            const result = new Intern('','','',addSchool).getSchool();
            expect(result).toBe(addSchool);
        })
    })
})