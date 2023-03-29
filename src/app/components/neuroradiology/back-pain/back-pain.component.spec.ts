import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackPainComponent } from './back-pain.component';

describe('BackPainComponent', () => {
  let component: BackPainComponent;
  let fixture: ComponentFixture<BackPainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackPainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackPainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
