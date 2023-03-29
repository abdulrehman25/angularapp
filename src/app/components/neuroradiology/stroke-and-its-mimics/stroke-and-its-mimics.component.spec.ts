import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrokeAndItsMimicsComponent } from './stroke-and-its-mimics.component';

describe('StrokeAndItsMimicsComponent', () => {
  let component: StrokeAndItsMimicsComponent;
  let fixture: ComponentFixture<StrokeAndItsMimicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrokeAndItsMimicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrokeAndItsMimicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
