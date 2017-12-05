import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsMasterComponent } from './payments-master.component';

describe('PaymentsMasterComponent', () => {
  let component: PaymentsMasterComponent;
  let fixture: ComponentFixture<PaymentsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
