import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationOfTinnitusComponent } from './evaluation-of-tinnitus.component';

describe('EvaluationOfTinnitusComponent', () => {
  let component: EvaluationOfTinnitusComponent;
  let fixture: ComponentFixture<EvaluationOfTinnitusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationOfTinnitusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationOfTinnitusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
