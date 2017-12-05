import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseinvoicesMasterComponent } from './purchaseinvoices-master.component';

describe('PurchaseinvoicesMasterComponent', () => {
  let component: PurchaseinvoicesMasterComponent;
  let fixture: ComponentFixture<PurchaseinvoicesMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseinvoicesMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseinvoicesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
