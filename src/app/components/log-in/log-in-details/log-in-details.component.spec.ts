import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInDetailsComponent } from './log-in-details.component';

describe('LogInDetailsComponent', () => {
  let component: LogInDetailsComponent;
  let fixture: ComponentFixture<LogInDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
