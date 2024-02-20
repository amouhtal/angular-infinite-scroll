import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInfiniteScrollComponent } from './ngx-infinite-scroll.component';

describe('NgxInfiniteScrollComponent', () => {
  let component: NgxInfiniteScrollComponent;
  let fixture: ComponentFixture<NgxInfiniteScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxInfiniteScrollComponent]
    });
    fixture = TestBed.createComponent(NgxInfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
