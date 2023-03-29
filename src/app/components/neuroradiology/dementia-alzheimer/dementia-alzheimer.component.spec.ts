import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiaAlzheimerComponent } from './dementia-alzheimer.component';

describe('DementiaAlzheimerComponent', () => {
  let component: DementiaAlzheimerComponent;
  let fixture: ComponentFixture<DementiaAlzheimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DementiaAlzheimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DementiaAlzheimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
