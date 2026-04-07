export enum PasswordErrors {
    SHORT= 'Password must be at least 8 characters long',
    NO_UPPERCASE = 'Password must contain at least one uppercase letter',
    NO_LOWERCASE = 'Password must contain at least one lowercase letter',
    NO_NUMBER = 'Password must contain at least one number'
}
export interface IPasswordChecker {
    valid: boolean,
    reasons: PasswordErrors[]
}
export class PassChecker {
    checkPassword(password: string): IPasswordChecker {
        const reasons: PasswordErrors[] = [];
        this.checkLength(password, reasons);
        this.checkUpperCase(password, reasons);
        this.checkLowerCase(password, reasons);
        return {
            valid: reasons.length === 0,
            reasons
        };
    }

    checkAdminPassword(password: string): IPasswordChecker {
        const reasons: PasswordErrors[] = [];
        const adminPassword = this.checkPassword(password);
        this.checkNumber(password, adminPassword.reasons);
        // Additional checks for admin password can be added here
        return {
            valid: reasons.length === 0,
            reasons: adminPassword.reasons
        };
    }
    private checkLength(password: string, reasons: PasswordErrors[]) {
        if (password.length < 8) {
            reasons.push(PasswordErrors.SHORT);
        }
    }

    private checkUpperCase(password: string, reasons: PasswordErrors[]) {
        if (!/[A-Z]/.test(password)) {
            reasons.push(PasswordErrors.NO_UPPERCASE);
        }
    }

    private checkLowerCase(password: string, reasons: PasswordErrors[]) {
        if (!/[a-z]/.test(password)) {
           reasons.push(PasswordErrors.NO_LOWERCASE);
        }
    }

    private checkNumber(password: string, reasons: PasswordErrors[]) {
        if (!/\d/.test(password)) {
            reasons.push(PasswordErrors.NO_NUMBER);
        }
    }
    
}