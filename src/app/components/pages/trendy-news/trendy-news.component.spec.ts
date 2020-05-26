import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendyNewsComponent } from './trendy-news.component';

describe('TrendyNewsComponent', () => {
  let component: TrendyNewsComponent;
  let fixture: ComponentFixture<TrendyNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendyNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
