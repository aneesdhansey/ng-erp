import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuconfigMasterComponent } from './menuconfig-master.component';

describe('MenuconfigMasterComponent', () => {
  let component: MenuconfigMasterComponent;
  let fixture: ComponentFixture<MenuconfigMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuconfigMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuconfigMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
