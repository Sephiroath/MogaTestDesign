import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentVotingComponent } from './current-voting.component';

describe('CurrentVotingComponent', () => {
  let component: CurrentVotingComponent;
  let fixture: ComponentFixture<CurrentVotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentVotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
