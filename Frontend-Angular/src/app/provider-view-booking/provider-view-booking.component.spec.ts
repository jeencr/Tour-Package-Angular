import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderViewBookingComponent } from './provider-view-booking.component';

describe('ProviderViewBookingComponent', () => {
  let component: ProviderViewBookingComponent;
  let fixture: ComponentFixture<ProviderViewBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderViewBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderViewBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
