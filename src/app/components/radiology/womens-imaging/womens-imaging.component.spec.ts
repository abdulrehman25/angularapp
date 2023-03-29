import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensImagingComponent } from './womens-imaging.component';

describe('WomensImagingComponent', () => {
  let component: WomensImagingComponent;
  let fixture: ComponentFixture<WomensImagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensImagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensImagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
