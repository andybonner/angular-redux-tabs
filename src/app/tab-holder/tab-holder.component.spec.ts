import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabHolderComponent } from './tab-holder.component';

describe('TabHolderComponent', () => {
  let component: TabHolderComponent;
  let fixture: ComponentFixture<TabHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
