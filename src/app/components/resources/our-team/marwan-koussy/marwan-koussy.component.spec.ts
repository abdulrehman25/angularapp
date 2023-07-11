import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarwanKoussyComponent } from './marwan-koussy.component';

describe('MarwanKoussyComponent', () => {
  let component: MarwanKoussyComponent;
  let fixture: ComponentFixture<MarwanKoussyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarwanKoussyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarwanKoussyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
