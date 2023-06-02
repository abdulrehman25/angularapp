import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiologySidebarComponent } from './radiology-sidebar.component';

describe('RadiologySidebarComponent', () => {
  let component: RadiologySidebarComponent;
  let fixture: ComponentFixture<RadiologySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiologySidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiologySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
