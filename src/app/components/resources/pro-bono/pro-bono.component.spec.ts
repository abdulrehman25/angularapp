import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProBonoComponent } from './pro-bono.component';

describe('ProBonoComponent', () => {
  let component: ProBonoComponent;
  let fixture: ComponentFixture<ProBonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProBonoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProBonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
