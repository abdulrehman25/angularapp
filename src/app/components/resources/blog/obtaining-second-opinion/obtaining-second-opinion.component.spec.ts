import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtainingSecondOpinionComponent } from './obtaining-second-opinion.component';

describe('ObtainingSecondOpinionComponent', () => {
  let component: ObtainingSecondOpinionComponent;
  let fixture: ComponentFixture<ObtainingSecondOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtainingSecondOpinionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObtainingSecondOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
