import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAcuteNeurologicalComponent } from './child-acute-neurological.component';

describe('ChildAcuteNeurologicalComponent', () => {
  let component: ChildAcuteNeurologicalComponent;
  let fixture: ComponentFixture<ChildAcuteNeurologicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAcuteNeurologicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildAcuteNeurologicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
