import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadTraumaComponent } from './head-trauma.component';

describe('HeadTraumaComponent', () => {
  let component: HeadTraumaComponent;
  let fixture: ComponentFixture<HeadTraumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadTraumaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadTraumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
