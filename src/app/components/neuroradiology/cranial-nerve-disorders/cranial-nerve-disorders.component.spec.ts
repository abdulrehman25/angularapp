import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CranialNerveDisordersComponent } from './cranial-nerve-disorders.component';

describe('CranialNerveDisordersComponent', () => {
  let component: CranialNerveDisordersComponent;
  let fixture: ComponentFixture<CranialNerveDisordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CranialNerveDisordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CranialNerveDisordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
