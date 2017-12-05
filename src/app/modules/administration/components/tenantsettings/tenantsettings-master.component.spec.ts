import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsettingsMasterComponent } from './tenantsettings-master.component';

describe('TenantsettingsMasterComponent', () => {
  let component: TenantsettingsMasterComponent;
  let fixture: ComponentFixture<TenantsettingsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantsettingsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantsettingsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
