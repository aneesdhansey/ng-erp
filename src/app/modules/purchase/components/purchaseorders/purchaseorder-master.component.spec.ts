import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseorderMasterComponent } from './purchaseorder-master.component';

describe('PurchaseorderMasterComponent', () => {
  let component: PurchaseorderMasterComponent;
  let fixture: ComponentFixture<PurchaseorderMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseorderMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseorderMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
