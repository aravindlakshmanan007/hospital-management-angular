import { ValidatorFn, AbstractControl } from '@angular/forms';

/** A name must match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ?  null : {'forbiddenName': {value: control.value}};
    };
  }