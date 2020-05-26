import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpDetailsComponent } from './sing-up-details.component';

describe('SingUpDetailsComponent', () => {
  let component: SingUpDetailsComponent;
  let fixture: ComponentFixture<SingUpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingUpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingUpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
