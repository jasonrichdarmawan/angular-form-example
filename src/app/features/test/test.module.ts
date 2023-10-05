import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestHomeComponent } from './presentation/pages/test-home/test-home.component';
import { TestFormService } from './domain/usecases/test-form/test-form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckIfNameExistsService } from './domain/usecases/check-if-name-exists/check-if-name-exists.service';
import { SimpleNgModelCompComponent } from './presentation/components/SimpleNgModelComp/simple-ng-model-comp/simple-ng-model-comp.component';
import { StringOrStringArrayExampleComponent } from './presentation/components/string-or-string-array-example/string-or-string-array-example.component';
import { JoinArrayPipe } from './domain/usecases/join-array/join-array.pipe';

@NgModule({
  declarations: [
    TestHomeComponent,
    SimpleNgModelCompComponent,
    StringOrStringArrayExampleComponent,
    JoinArrayPipe
  ],
  imports: [
    CommonModule,
    TestRoutingModule,

    // TODO: standalone component for SimpleNgModelCompz
    FormsModule,

    // TODO: standalone component for TestHomeComponent
    ReactiveFormsModule,
  ],
  providers: [
    // TODO: standalone component for TestHomeComponent
    TestFormService,
    CheckIfNameExistsService,
  ]
})
export class TestModule { }
