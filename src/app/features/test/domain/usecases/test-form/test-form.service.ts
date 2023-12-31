import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CheckIfNameExistsService } from '../check-if-name-exists/check-if-name-exists.service';
import { Observable, map } from 'rxjs';

@Injectable()
export class TestFormService {
  favoriteColorControl: FormControl;
  heroForm: FormGroup;

  constructor(private checkIfNamExistsService: CheckIfNameExistsService) {
    this.favoriteColorControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);

    this.heroForm = new FormGroup({
      name: new FormControl('',
        [
          Validators.required,
          Validators.minLength(4),
        ],
        [
          this.nameValidator()
        ]
      ),
      alterEgo: new FormArray([
        new FormControl(
          {
            ego: "happy",
          },
        ),
        new FormControl(
          {
            ego: "sad",
          },
        )
      ]),
      power: new FormControl('', Validators.required)
    })
  }

  get name() { return this.heroForm.get('name'); }

  get alterEgo() { return this.heroForm.get("alterEgo") as FormArray; }

  get power() { return this.heroForm.get('power'); }

  private nameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkIfNamExistsService
        .check(control.value)
        .pipe(
          map((result: boolean) =>
            result ? { nameExists: true } : null
          )
        );
    };
  }

  pushAlterEgo(alterEgo: string) {
    this.alterEgo.push(new FormControl(
      {
        ego: alterEgo
      }
    ))
  }
}
