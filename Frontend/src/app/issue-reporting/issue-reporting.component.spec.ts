import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueReportingComponent } from './issue-reporting.component';

describe('IssueReportingComponent', () => {
  let component: IssueReportingComponent;
  let fixture: ComponentFixture<IssueReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
