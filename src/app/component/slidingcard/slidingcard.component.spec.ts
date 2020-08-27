import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingcardComponent } from './slidingcard.component';

describe('SlidingcardComponent', () => {
  let component: SlidingcardComponent;
  let fixture: ComponentFixture<SlidingcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
