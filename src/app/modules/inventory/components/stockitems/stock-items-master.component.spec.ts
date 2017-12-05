import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemsMasterComponent } from './stock-items-master.component';

describe('StockItemsMasterComponent', () => {
  let component: StockItemsMasterComponent;
  let fixture: ComponentFixture<StockItemsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
