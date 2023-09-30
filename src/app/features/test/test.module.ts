import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestHomeComponent } from './presentation/pages/test-home/test-home.component';
import { TestFormService } from './domain/usecases/test-form.service';
import { ReactiveFormsModule } from '@angular/forms';

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
  ]
})
export class TestModule { }
