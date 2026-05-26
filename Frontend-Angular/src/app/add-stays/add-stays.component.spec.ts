import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaysComponent } from './add-stays.component';

describe('AddStaysComponent', () => {
  let component: AddStaysComponent;
  let fixture: ComponentFixture<AddStaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
