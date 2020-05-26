import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSaysComponent } from './people-says.component';

describe('PeopleSaysComponent', () => {
  let component: PeopleSaysComponent;
  let fixture: ComponentFixture<PeopleSaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
