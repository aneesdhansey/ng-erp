import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsMasterComponent } from './shipments-master.component';

describe('ShipmentsMasterComponent', () => {
  let component: ShipmentsMasterComponent;
  let fixture: ComponentFixture<ShipmentsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
