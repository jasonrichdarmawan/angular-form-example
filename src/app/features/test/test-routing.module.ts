import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestHomeComponent } from './presentation/pages/test-home/test-home.component';

const routes: Routes = [
  {
    path: '',
    component: TestHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
