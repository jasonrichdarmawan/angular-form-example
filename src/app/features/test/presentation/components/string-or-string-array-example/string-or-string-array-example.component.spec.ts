import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringOrStringArrayExampleComponent } from './string-or-string-array-example.component';

describe('StringOrStringArrayExampleComponent', () => {
  let component: StringOrStringArrayExampleComponent;
  let fixture: ComponentFixture<StringOrStringArrayExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringOrStringArrayExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringOrStringArrayExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
