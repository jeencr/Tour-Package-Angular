import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStaysComponent } from './manage-stays.component';

describe('ManageStaysComponent', () => {
  let component: ManageStaysComponent;
  let fixture: ComponentFixture<ManageStaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageStaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
