import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediatricSportsInjuriesComponent } from './pediatric-sports-injuries.component';

describe('PediatricSportsInjuriesComponent', () => {
  let component: PediatricSportsInjuriesComponent;
  let fixture: ComponentFixture<PediatricSportsInjuriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PediatricSportsInjuriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PediatricSportsInjuriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
