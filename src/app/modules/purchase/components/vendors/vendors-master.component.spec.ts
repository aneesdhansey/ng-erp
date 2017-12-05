import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsMasterComponent } from './vendors-master.component';

describe('VendorsMasterComponent', () => {
  let component: VendorsMasterComponent;
  let fixture: ComponentFixture<VendorsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
