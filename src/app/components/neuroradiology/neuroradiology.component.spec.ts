import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuroradiologyComponent } from './neuroradiology.component';

describe('NeuroradiologyComponent', () => {
  let component: NeuroradiologyComponent;
  let fixture: ComponentFixture<NeuroradiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuroradiologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeuroradiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
