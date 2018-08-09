import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpwdComponent } from './forgotpwd.component';

describe('ForgotpwdComponent', () => {
  let component: ForgotpwdComponent;
  let fixture: ComponentFixture<ForgotpwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotpwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
