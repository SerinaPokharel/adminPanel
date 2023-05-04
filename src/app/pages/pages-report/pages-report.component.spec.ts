import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesReportComponent } from './pages-report.component';

describe('PagesReportComponent', () => {
  let component: PagesReportComponent;
  let fixture: ComponentFixture<PagesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
