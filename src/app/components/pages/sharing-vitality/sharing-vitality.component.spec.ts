import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingVitalityComponent } from './sharing-vitality.component';

describe('SharingVitalityComponent', () => {
  let component: SharingVitalityComponent;
  let fixture: ComponentFixture<SharingVitalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharingVitalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharingVitalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
