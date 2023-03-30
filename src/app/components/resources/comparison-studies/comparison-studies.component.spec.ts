import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonStudiesComponent } from './comparison-studies.component';

describe('ComparisonStudiesComponent', () => {
  let component: ComparisonStudiesComponent;
  let fixture: ComponentFixture<ComparisonStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisonStudiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparisonStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
