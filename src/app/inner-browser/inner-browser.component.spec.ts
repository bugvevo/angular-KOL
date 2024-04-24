import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerBrowserComponent } from './inner-browser.component';

describe('InnerBrowserComponent', () => {
  let component: InnerBrowserComponent;
  let fixture: ComponentFixture<InnerBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerBrowserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
