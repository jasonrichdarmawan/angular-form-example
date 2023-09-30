import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class TestFormService {
  favoriteColorControl: FormControl;
  heroForm: FormGroup;

  constructor() {
    this.favoriteColorControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);

    this.heroForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      alterEgo: new FormControl(''),
      power: new FormControl('', Validators.required)
    })
  }

  get name() { return this.heroForm.get('name'); }

  get power() { return this.heroForm.get('power'); }
}
