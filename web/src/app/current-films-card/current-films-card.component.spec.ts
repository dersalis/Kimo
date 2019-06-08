import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFilmsCardComponent } from './current-films-card.component';

describe('CurrentFilmsCardComponent', () => {
  let component: CurrentFilmsCardComponent;
  let fixture: ComponentFixture<CurrentFilmsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentFilmsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentFilmsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
