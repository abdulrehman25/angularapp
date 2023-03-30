import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceRadiologyTrainingComponent } from './guidance-radiology-training.component';

describe('GuidanceRadiologyTrainingComponent', () => {
  let component: GuidanceRadiologyTrainingComponent;
  let fixture: ComponentFixture<GuidanceRadiologyTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceRadiologyTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceRadiologyTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
