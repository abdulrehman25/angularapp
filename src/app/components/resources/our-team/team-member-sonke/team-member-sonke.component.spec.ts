import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberSonkeComponent } from './team-member-sonke.component';

describe('TeamMemberSonkeComponent', () => {
  let component: TeamMemberSonkeComponent;
  let fixture: ComponentFixture<TeamMemberSonkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMemberSonkeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamMemberSonkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
