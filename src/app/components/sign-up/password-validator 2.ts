import { AbstractControl, ValidationErrors } from "@angular/forms"

export const passwordValidator = function (control: AbstractControl): ValidationErrors | null {

    let value: string = control.value || '';
    if (!value) {
        return null
    }
    let upperCaseCharacters = /[A-Z]+/g
    if (upperCaseCharacters.test(value) === false) {
        return { passwordStrength: `Has to contine upper case characters.` };
    }
    let lowerCaseCharacters = /[a-z]+/g
    if (lowerCaseCharacters.test(value) === false) {
        return { passwordStrength: `Has to contine lower case characters.` };
    }

    let numberCharacters = /[0-9]+/g
    if (numberCharacters.test(value) === false) {
        return { passwordStrength: `Has to contine number characters.` };
    }
    let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    if (specialCharacters.test(value) === false) {
        return { passwordStrength: `Has to contine special character.` };
    }
    if (8 > value.length ) {
        return { passwordStrength: `Has to least 8 characters long.` };
    }
    if ( value.length > 32) {
        return { passwordStrength: `Has to no more than 32 characters long.` };
    }
    return null;
}