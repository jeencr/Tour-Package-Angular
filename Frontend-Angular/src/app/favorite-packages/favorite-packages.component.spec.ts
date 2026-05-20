import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePackagesComponent } from './favorite-packages.component';

describe('FavoritePackagesComponent', () => {
  let component: FavoritePackagesComponent;
  let fixture: ComponentFixture<FavoritePackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
