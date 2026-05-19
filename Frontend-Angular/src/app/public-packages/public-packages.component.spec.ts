import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPackagesComponent } from './public-packages.component';

describe('PublicPackagesComponent', () => {
  let component: PublicPackagesComponent;
  let fixture: ComponentFixture<PublicPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
