import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialBlogComponent } from './testimonial-blog.component';

describe('TestimonialBlogComponent', () => {
  let component: TestimonialBlogComponent;
  let fixture: ComponentFixture<TestimonialBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
