import { ComponentFixture, TestBed } from "@angular/core/testing";
import {PanelComponent} from "./panel";


// PanelComponent <= ComponentPanelComponent
// Grupo de pruebas del componente
describe('PanelComponent',()=>{
    // Variable para el componente
    let component:PanelComponent;
    let fixture:ComponentFixture<PanelComponent>;
    // Configuracion antes de cada prueba
    beforeEach(async() => {
        // Configuramos el entorno de pruebas
        await TestBed.configureTestingModule({
            imports:[PanelComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(PanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('create',()=>{
        expect(component).toBeTruthy();
    })
})

