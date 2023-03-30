import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryReadsComponent } from './primary-reads.component';

describe('PrimaryReadsComponent', () => {
  let component: PrimaryReadsComponent;
  let fixture: ComponentFixture<PrimaryReadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryReadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryReadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
