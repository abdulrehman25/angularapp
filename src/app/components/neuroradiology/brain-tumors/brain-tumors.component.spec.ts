import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainTumorsComponent } from './brain-tumors.component';

describe('BrainTumorsComponent', () => {
  let component: BrainTumorsComponent;
  let fixture: ComponentFixture<BrainTumorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrainTumorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrainTumorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
