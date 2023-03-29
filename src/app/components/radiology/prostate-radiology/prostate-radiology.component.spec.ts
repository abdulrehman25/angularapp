import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProstateRadiologyComponent } from './prostate-radiology.component';

describe('ProstateRadiologyComponent', () => {
  let component: ProstateRadiologyComponent;
  let fixture: ComponentFixture<ProstateRadiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProstateRadiologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProstateRadiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
