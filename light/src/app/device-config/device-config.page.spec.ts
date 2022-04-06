import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceConfigPage } from './device-config.page';

describe('DeviceConfigPage', () => {
  let component: DeviceConfigPage;
  let fixture: ComponentFixture<DeviceConfigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceConfigPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
