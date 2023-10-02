import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-ng-model-comp',
  templateUrl: './simple-ng-model-comp.component.html',
  styleUrls: ['./simple-ng-model-comp.component.scss']
})
export class SimpleNgModelCompComponent implements OnInit {
  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  setValue() {
    this.name = 'Nancy';
  }

}
