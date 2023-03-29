import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdominalAdiologyComponent } from './abdominal-adiology.component';

describe('AbdominalAdiologyComponent', () => {
  let component: AbdominalAdiologyComponent;
  let fixture: ComponentFixture<AbdominalAdiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbdominalAdiologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbdominalAdiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
