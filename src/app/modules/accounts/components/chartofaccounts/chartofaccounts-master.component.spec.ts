import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartofaccountsMasterComponent } from './chartofaccounts-master.component';

describe('ChartofaccountsMasterComponent', () => {
  let component: ChartofaccountsMasterComponent;
  let fixture: ComponentFixture<ChartofaccountsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartofaccountsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartofaccountsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
