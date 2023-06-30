import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiologistsReadAcrossComponent } from './radiologists-read-across.component';

describe('RadiologistsReadAcrossComponent', () => {
  let component: RadiologistsReadAcrossComponent;
  let fixture: ComponentFixture<RadiologistsReadAcrossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiologistsReadAcrossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiologistsReadAcrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
