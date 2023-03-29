import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionalRadiologyGuidanceComponent } from './interventional-radiology-guidance.component';

describe('InterventionalRadiologyGuidanceComponent', () => {
  let component: InterventionalRadiologyGuidanceComponent;
  let fixture: ComponentFixture<InterventionalRadiologyGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterventionalRadiologyGuidanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterventionalRadiologyGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
