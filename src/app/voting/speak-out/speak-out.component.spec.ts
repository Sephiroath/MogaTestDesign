import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakOutComponent } from './speak-out.component';

describe('SpeakOutComponent', () => {
  let component: SpeakOutComponent;
  let fixture: ComponentFixture<SpeakOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
