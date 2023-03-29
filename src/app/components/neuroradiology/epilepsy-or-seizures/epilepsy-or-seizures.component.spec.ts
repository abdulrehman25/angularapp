import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpilepsyOrSeizuresComponent } from './epilepsy-or-seizures.component';

describe('EpilepsyOrSeizuresComponent', () => {
  let component: EpilepsyOrSeizuresComponent;
  let fixture: ComponentFixture<EpilepsyOrSeizuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpilepsyOrSeizuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpilepsyOrSeizuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
