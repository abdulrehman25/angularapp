import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinalTraumaComponent } from './spinal-trauma.component';

describe('SpinalTraumaComponent', () => {
  let component: SpinalTraumaComponent;
  let fixture: ComponentFixture<SpinalTraumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinalTraumaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinalTraumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
