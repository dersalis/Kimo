import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisedFilmsBallComponent } from './promised-films-ball.component';

describe('PromisedFilmsBallComponent', () => {
  let component: PromisedFilmsBallComponent;
  let fixture: ComponentFixture<PromisedFilmsBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromisedFilmsBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisedFilmsBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
