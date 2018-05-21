import { AbstractControl, ValidationErrors, FormGroup } from "@angular/forms";

export class PasswordValidators {

    static shouldBeValid(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value !== '12345') {
                    resolve({ shouldBeValid: true });
                }
                resolve(null);
            }, 2000);
        });
    }

    static shouldMatch(group: FormGroup): ValidationErrors | null {
        let newPassword: string = group.controls['newPassword'].value;
        let confirmPassword: string = group.controls['confirmPassword'].value;

        if (newPassword && confirmPassword) {
            if (newPassword !== confirmPassword) {
                return { shouldMatch: true };
            }
        }
        return null;
    }
}