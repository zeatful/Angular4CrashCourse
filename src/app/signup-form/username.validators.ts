import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            /* can use a complex object instead of true to return details
            to the user*/
            return { cannotContainSpace: true };
        }

        return null;
    }
}