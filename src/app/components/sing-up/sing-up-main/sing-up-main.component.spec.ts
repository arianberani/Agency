import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpMainComponent } from './sing-up-main.component';

describe('SingUpMainComponent', () => {
  let component: SingUpMainComponent;
  let fixture: ComponentFixture<SingUpMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingUpMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingUpMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
