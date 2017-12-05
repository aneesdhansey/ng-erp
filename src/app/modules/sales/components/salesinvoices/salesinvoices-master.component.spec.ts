import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesinvoicesMasterComponent } from './salesinvoices-master.component';

describe('SalesinvoicesMasterComponent', () => {
  let component: SalesinvoicesMasterComponent;
  let fixture: ComponentFixture<SalesinvoicesMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesinvoicesMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesinvoicesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
