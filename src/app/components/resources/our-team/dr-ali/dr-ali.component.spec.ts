import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrAliComponent } from './dr-ali.component';

describe('DrAliComponent', () => {
  let component: DrAliComponent;
  let fixture: ComponentFixture<DrAliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrAliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrAliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
