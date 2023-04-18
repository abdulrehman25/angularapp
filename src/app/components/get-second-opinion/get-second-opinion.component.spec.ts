import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSecondOpinionComponent } from './get-second-opinion.component';

describe('GetSecondOpinionComponent', () => {
  let component: GetSecondOpinionComponent;
  let fixture: ComponentFixture<GetSecondOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSecondOpinionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSecondOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
