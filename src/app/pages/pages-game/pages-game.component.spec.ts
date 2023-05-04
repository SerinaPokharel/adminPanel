import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesGameComponent } from './pages-game.component';

describe('PagesGameComponent', () => {
  let component: PagesGameComponent;
  let fixture: ComponentFixture<PagesGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
