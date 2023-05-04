import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesJpComponent } from './pages-jp.component';

describe('PagesJpComponent', () => {
  let component: PagesJpComponent;
  let fixture: ComponentFixture<PagesJpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesJpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
