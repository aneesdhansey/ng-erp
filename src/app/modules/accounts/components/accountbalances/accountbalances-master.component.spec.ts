import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountbalancesMasterComponent } from './accountbalances-master.component';

describe('AccountbalancesMasterComponent', () => {
  let component: AccountbalancesMasterComponent;
  let fixture: ComponentFixture<AccountbalancesMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountbalancesMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountbalancesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
