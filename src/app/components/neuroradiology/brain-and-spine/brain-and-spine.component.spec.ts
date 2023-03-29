import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainAndSpineComponent } from './brain-and-spine.component';

describe('BrainAndSpineComponent', () => {
  let component: BrainAndSpineComponent;
  let fixture: ComponentFixture<BrainAndSpineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrainAndSpineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrainAndSpineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
