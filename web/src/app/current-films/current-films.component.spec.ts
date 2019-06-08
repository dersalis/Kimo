import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFilmsComponent } from './current-films.component';

describe('CurrentFilmsComponent', () => {
  let component: CurrentFilmsComponent;
  let fixture: ComponentFixture<CurrentFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
