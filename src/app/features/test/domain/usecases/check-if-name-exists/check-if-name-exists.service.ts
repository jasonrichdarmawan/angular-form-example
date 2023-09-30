import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable()
export class CheckIfNameExistsService {
  private existingNames = ['Batman', 'Superman', 'Joker', 'Luthor'];

  constructor() { }

  check(value: String) {
    return of(this.existingNames
      .some((item) => item === value))
      .pipe(delay(1000));
  }
}
