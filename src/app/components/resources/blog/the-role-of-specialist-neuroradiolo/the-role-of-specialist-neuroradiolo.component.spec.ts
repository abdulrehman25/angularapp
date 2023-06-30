import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRoleOfSpecialistNeuroradioloComponent } from './the-role-of-specialist-neuroradiolo.component';

describe('TheRoleOfSpecialistNeuroradioloComponent', () => {
  let component: TheRoleOfSpecialistNeuroradioloComponent;
  let fixture: ComponentFixture<TheRoleOfSpecialistNeuroradioloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheRoleOfSpecialistNeuroradioloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheRoleOfSpecialistNeuroradioloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
