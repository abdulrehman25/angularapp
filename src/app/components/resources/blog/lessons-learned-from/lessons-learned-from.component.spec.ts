import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsLearnedFromComponent } from './lessons-learned-from.component';

describe('LessonsLearnedFromComponent', () => {
  let component: LessonsLearnedFromComponent;
  let fixture: ComponentFixture<LessonsLearnedFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsLearnedFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsLearnedFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
