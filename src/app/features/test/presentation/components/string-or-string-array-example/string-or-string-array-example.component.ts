import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-or-string-array-example',
  templateUrl: './string-or-string-array-example.component.html',
  styleUrls: ['./string-or-string-array-example.component.scss']
})
export class StringOrStringArrayExampleComponent implements OnInit {
  spaceSubCategory: string | string[]

  constructor() {
    let oneOrZero = Math.round(Math.random());

    if (oneOrZero == 0) {
      this.spaceSubCategory = "class1";
    } else {
      this.spaceSubCategory = ["class1", "class2"];
    }
  }

  ngOnInit(): void {
  }

}
