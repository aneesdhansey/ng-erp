import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesordersMasterComponent } from './salesorders-master.component';

describe('SalesordersMasterComponent', () => {
  let component: SalesordersMasterComponent;
  let fixture: ComponentFixture<SalesordersMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesordersMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesordersMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
