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

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors> | null {
        /* 
            Deconstructing the method signature of the Promise constructor:
            executor: (resolve: (value?: T | PromiseLike<T>) => void),
            reject: (reason?: any) => void) => void

            resolve is a function that takes a value and returns void
            reject is a function that takes an optional parameter called reason and returns void
        */
        return new Promise((resolve, reject) => {
            // faking an asynchronous server call
            setTimeout(() => {
                if (control.value === 'eric') {
                    // return promise resolve
                    resolve({ shouldBeUnique: true });
                }
                else
                    resolve(null);
            }, 2000);
        });
    }
}