import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisedFilmsComponent } from './promised-films.component';

describe('PromisedFilmsComponent', () => {
  let component: PromisedFilmsComponent;
  let fixture: ComponentFixture<PromisedFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromisedFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisedFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
