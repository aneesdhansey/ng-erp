import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesMasterComponent } from './courses-master.component';

describe('CoursesMasterComponent', () => {
  let component: CoursesMasterComponent;
  let fixture: ComponentFixture<CoursesMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
