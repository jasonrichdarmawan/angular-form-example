import { Component, OnInit } from '@angular/core';
import { TestFormService } from '../../../domain/usecases/test-form.service';

@Component({
  selector: 'app-test-home',
  templateUrl: './test-home.component.html',
  styleUrls: ['./test-home.component.scss']
})
export class TestHomeComponent implements OnInit {

  constructor(
    public testForm: TestFormService,
  ) {
  }

  ngOnInit(): void {
  }
}
