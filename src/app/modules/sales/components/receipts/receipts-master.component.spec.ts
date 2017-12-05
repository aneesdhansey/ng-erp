import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptsMasterComponent } from './receipts-master.component';

describe('ReceiptsMasterComponent', () => {
  let component: ReceiptsMasterComponent;
  let fixture: ComponentFixture<ReceiptsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
