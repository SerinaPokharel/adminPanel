import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PagesWheelComponent } from "./pages-wheel.component";

describe("PagesWheelComponent", () => {
    let component: PagesWheelComponent;
    let fixture: ComponentFixture<PagesWheelComponent>;
    
    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [PagesWheelComponent],
        }).compileComponents();
    
        fixture = TestBed.createComponent(PagesWheelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it("should create", () => {
        expect(component).toBeTruthy();
    });
    });