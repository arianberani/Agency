import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInMainComponent } from './log-in-main.component';

describe('LogInMainComponent', () => {
  let component: LogInMainComponent;
  let fixture: ComponentFixture<LogInMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
