import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPoolsComponent } from './other-pools.component';

describe('OtherPoolsComponent', () => {
  let component: OtherPoolsComponent;
  let fixture: ComponentFixture<OtherPoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
