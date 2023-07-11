import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NedelinaSlavovaComponent } from './nedelina-slavova.component';

describe('NedelinaSlavovaComponent', () => {
  let component: NedelinaSlavovaComponent;
  let fixture: ComponentFixture<NedelinaSlavovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NedelinaSlavovaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NedelinaSlavovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
