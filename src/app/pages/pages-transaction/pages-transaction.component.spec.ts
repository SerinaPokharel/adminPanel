import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesTransactionComponent } from './pages-transaction.component';

describe('PagesTransactionComponent', () => {
  let component: PagesTransactionComponent;
  let fixture: ComponentFixture<PagesTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
