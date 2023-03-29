import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediatricRadiologyComponent } from './pediatric-radiology.component';

describe('PediatricRadiologyComponent', () => {
  let component: PediatricRadiologyComponent;
  let fixture: ComponentFixture<PediatricRadiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PediatricRadiologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PediatricRadiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
