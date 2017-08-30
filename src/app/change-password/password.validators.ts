import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
export class PasswordValidators {
    static validOldPassword(control: AbstractControl): Promise<ValidationErrors> {
        return new Promise((resolve) => {
            if (control.value !== '1234')
                resolve({ invalidOldPassword: true });
            else
                resolve(null);
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value) {
            return { passwordsDoNotMatch: true };
        }

        return null;
    }
}