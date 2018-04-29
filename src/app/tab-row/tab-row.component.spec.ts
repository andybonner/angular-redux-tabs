import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRowComponent } from './tab-row.component';

describe('TabRowComponent', () => {
  let component: TabRowComponent;
  let fixture: ComponentFixture<TabRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
