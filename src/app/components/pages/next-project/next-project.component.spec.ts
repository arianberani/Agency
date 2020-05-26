import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextProjectComponent } from './next-project.component';

describe('NextProjectComponent', () => {
  let component: NextProjectComponent;
  let fixture: ComponentFixture<NextProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
