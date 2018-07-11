import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPoolComponent } from './main-pool.component';

describe('MainPoolComponent', () => {
  let component: MainPoolComponent;
  let fixture: ComponentFixture<MainPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
