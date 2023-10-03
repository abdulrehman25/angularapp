import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadAndNeckComponent } from './head-and-neck.component';

describe('HeadAndNeckComponent', () => {
  let component: HeadAndNeckComponent;
  let fixture: ComponentFixture<HeadAndNeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadAndNeckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadAndNeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
