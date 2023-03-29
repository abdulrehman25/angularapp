import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetabolicDisordersComponent } from './metabolic-disorders.component';

describe('MetabolicDisordersComponent', () => {
  let component: MetabolicDisordersComponent;
  let fixture: ComponentFixture<MetabolicDisordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetabolicDisordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetabolicDisordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
