import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultyItemsMasterComponent } from './faulty-items-master.component';

describe('FaultyItemsMasterComponent', () => {
  let component: FaultyItemsMasterComponent;
  let fixture: ComponentFixture<FaultyItemsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultyItemsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultyItemsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
