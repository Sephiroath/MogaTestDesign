import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolSuggestionsComponent } from './pool-suggestions.component';

describe('PoolSuggestionsComponent', () => {
  let component: PoolSuggestionsComponent;
  let fixture: ComponentFixture<PoolSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
