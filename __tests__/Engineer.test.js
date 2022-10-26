// Test Suite for Engineer.js in lib
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getName', () => {
        it('should return the name of the employee', () => {
            const addEmployee = 'Brenda';
            const result = new Engineer(addEmployee).getName();
            expect(result).toBe(addEmployee);
        })
    })
    describe('getId', () => {
        it('should return the Id of the employee', () => {
            const addId = '5';
            const result = new Engineer('',addId).getId();
            expect(result).toBe(addId);
        })
    })
    describe('getEmail', () => {
        it('should return the Email of the employee', () => {
            const addEmail = 'TDD_Rocks@ucf.edu';
            const result = new Engineer('','',addEmail).getEmail();
            expect(result).toBe(addEmail);
        })
    })
    describe('getRole', () => {
        it('should return the Role of the employee', () => {
            const thisRole = 'Engineer';
            const result = new Engineer().getRole();
            expect(result).toBe(thisRole);
        })
    })
    describe('getGitHub', () => {
        it('should return the GitHub of the Employee', () => {
            const addGitHub = 'WillyWonka';
            const result = new Engineer('','','',addGitHub).getGitHub();
            expect(result).toBe(addGitHub);
        })
    })
});