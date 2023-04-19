import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomOfPagesComponent } from './bottom-of-pages.component';

describe('BottomOfPagesComponent', () => {
  let component: BottomOfPagesComponent;
  let fixture: ComponentFixture<BottomOfPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomOfPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomOfPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
