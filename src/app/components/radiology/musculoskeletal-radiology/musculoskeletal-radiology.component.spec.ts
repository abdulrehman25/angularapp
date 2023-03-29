import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusculoskeletalRadiologyComponent } from './musculoskeletal-radiology.component';

describe('MusculoskeletalRadiologyComponent', () => {
  let component: MusculoskeletalRadiologyComponent;
  let fixture: ComponentFixture<MusculoskeletalRadiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusculoskeletalRadiologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusculoskeletalRadiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
