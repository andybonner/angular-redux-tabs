import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPopulateButtonComponent } from './app-populate-button.component';

describe('AppPopulateButtonComponent', () => {
  let component: AppPopulateButtonComponent;
  let fixture: ComponentFixture<AppPopulateButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPopulateButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPopulateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
