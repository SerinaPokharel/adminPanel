import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PagesAdminStructComponent } from "./pages-adminStruct.component";

describe ("PagesAdminStructComponent", () => {
    let component: PagesAdminStructComponent;
    let fixture: ComponentFixture<PagesAdminStructComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [PagesAdminStructComponent],
        }).compileComponents();

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});