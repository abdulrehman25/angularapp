import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrankBenschComponent } from './frank-bensch.component';

describe('FrankBenschComponent', () => {
  let component: FrankBenschComponent;
  let fixture: ComponentFixture<FrankBenschComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrankBenschComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrankBenschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
