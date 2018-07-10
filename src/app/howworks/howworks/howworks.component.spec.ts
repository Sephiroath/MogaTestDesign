import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowworksComponent } from './howworks.component';

describe('HowworksComponent', () => {
  let component: HowworksComponent;
  let fixture: ComponentFixture<HowworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
