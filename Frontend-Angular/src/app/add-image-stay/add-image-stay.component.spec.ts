import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImageStayComponent } from './add-image-stay.component';

describe('AddImageStayComponent', () => {
  let component: AddImageStayComponent;
  let fixture: ComponentFixture<AddImageStayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddImageStayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImageStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
