import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesJpsetComponent } from './pages-jpset.component';

describe('PagesJpsetComponent', () => {
    let component: PagesJpsetComponent;
    let fixture: ComponentFixture<PagesJpsetComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PagesJpsetComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PagesJpsetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }
    );

    it('should create', () => {
        expect(component).toBeTruthy();
    }
    );
}
);