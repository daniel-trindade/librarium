import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function selectValidator(defaultValue: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value === defaultValue ? { invalidSelection: true } : null;
  };
}