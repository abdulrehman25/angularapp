import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrocephalusAndCSFComponent } from './hydrocephalus-and-csf.component';

describe('HydrocephalusAndCSFComponent', () => {
  let component: HydrocephalusAndCSFComponent;
  let fixture: ComponentFixture<HydrocephalusAndCSFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HydrocephalusAndCSFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HydrocephalusAndCSFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
