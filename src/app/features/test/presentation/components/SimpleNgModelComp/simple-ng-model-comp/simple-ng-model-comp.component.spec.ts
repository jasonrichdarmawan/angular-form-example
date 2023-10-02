import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNgModelCompComponent } from './simple-ng-model-comp.component';

describe('SimpleNgModelCompComponent', () => {
  let component: SimpleNgModelCompComponent;
  let fixture: ComponentFixture<SimpleNgModelCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleNgModelCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleNgModelCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
