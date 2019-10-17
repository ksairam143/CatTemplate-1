import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterAccordionComponent } from './center-accordion.component';

describe('CenterAccordionComponent', () => {
  let component: CenterAccordionComponent;
  let fixture: ComponentFixture<CenterAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
