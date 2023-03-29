import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HypophysisComponent } from './hypophysis.component';

describe('HypophysisComponent', () => {
  let component: HypophysisComponent;
  let fixture: ComponentFixture<HypophysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HypophysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HypophysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
