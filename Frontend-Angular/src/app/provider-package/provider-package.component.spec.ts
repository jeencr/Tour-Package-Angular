import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderPackageComponent } from './provider-package.component';

describe('ProviderPackageComponent', () => {
  let component: ProviderPackageComponent;
  let fixture: ComponentFixture<ProviderPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
