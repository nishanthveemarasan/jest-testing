import {describe, expect, test, it, beforeEach} from '@jest/globals';
import { PassChecker, PasswordErrors } from '../../app/pass_checker';

describe('PasswordChecker test suite', () => {
    let sut: PassChecker;
    
    beforeEach(() => {
        sut = new PassChecker();
    });

    it('Password with less than 8 chars will be invalid', () => {
        const result = sut.checkPassword('Ab1');
        expect(result.valid).toBe(false);
        expect(result.reasons).toContain(PasswordErrors.SHORT)
    });

    it('Password without uppercase letter will be invalid', () => {
        const result = sut.checkPassword('ab11defg');
        expect(result.valid).toBe(false);
        expect(result.reasons).toContain(PasswordErrors.NO_UPPERCASE)
    });

    it('Password without lowercase letter will be invalid', () => {
        const result = sut.checkPassword('AB1DEFGL');
        expect(result.valid).toBe(false);
        expect(result.reasons).toContain(PasswordErrors.NO_LOWERCASE)
    });

    it('Password with at least 8 chars, uppercase and lowercase letters will be valid', () => {
        const result = sut.checkPassword('Ab1wdefg');
        expect(result.valid).toBe(true);
        expect(result.reasons).toEqual([]);
    });

    it('Admin password with no number is invalid', () => {
        const result = sut.checkAdminPassword('Abcdefgh');
        expect(result.valid).toBe(false);
        // Assuming we add a new error for missing number in admin password
       
       
        expect(result.reasons).toContain(PasswordErrors.NO_NUMBER);
    });
});