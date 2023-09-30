import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestHomeComponent } from './presentation/pages/test-home/test-home.component';
import { TestFormService } from './domain/usecases/test-form/test-form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckIfNameExistsService } from './domain/usecases/check-if-name-exists/check-if-name-exists.service';

@NgModule({
  declarations: [
    TestHomeComponent,
  ],
  imports: [
    CommonModule,
    TestRoutingModule,

    // TODO: standalone component for TestHomeComponent
    ReactiveFormsModule
  ],
  providers: [
    // TODO: standalone component for TestHomeComponent
    TestFormService,
    CheckIfNameExistsService,
  ]
})
export class TestModule { }
