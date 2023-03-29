import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OncologicalRadiologyComponent } from './oncological-radiology.component';

describe('OncologicalRadiologyComponent', () => {
  let component: OncologicalRadiologyComponent;
  let fixture: ComponentFixture<OncologicalRadiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OncologicalRadiologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OncologicalRadiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
