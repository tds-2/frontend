// =======================================================================
// Component - Panel
// Controla la logica del menu
// Carga datos desde el back y lo muestra en pantalla
// ==========================================================================

// Importamos component para crear componente de angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Colaborador} from '../../models/colaborador';
import { ColaboradorService } from '../../services/colaborador.service';

// Definimos el componente
@Component({
    // Mombre de la etiqueta del componente
    selector: 'app-panel',
    standalone: true,
    // Permite usar directivas como "hgif" y "ngfor"
    imports: [CommonModule],
    templateUrl: './panel.html',
    styleUrl: './panel.css'
})
// Clase principal del componente
export class Panel{
    // Controla si el sidebar esta contraido
    sidebarContraido = false;
    // Controla si el menu dashboard esta abierto
    dashboardAbierto=true;
    usuario = "Beckan Geronimo"
    // lista donde se guardan los colaboradores del backend
    colaboradores:Colaborador[]=[];
    // controla si debe mostrar la tabla
    mostrarTabla=false;

    cargando=false;
    error='';
    // Inyectamos el servicio de colaboradores
    constructor(private colaboradorService:ColaboradorService){}
    // Abre o cierra el sidebar
    toggleSidebar():void{
        // Cambia true o false
        this.sidebarContraido=!this.sidebarContraido;
    }

    // Abre o cierra el submenu
    toggleDashboard():void{
        // Cambia true o false
        this.dashboardAbierto= !this.dashboardAbierto;
    }

    cargarColaboradores():void{
        console.log('Click en Colaborador')
        this.cargando = true;
        this.error = '';
        this.mostrarTabla = false;
        this.colaboradorService.listar().subscribe({
            next: (data) => {
                console.log('Datos recibidos:',data);
                this.colaboradores=data;
                this.mostrarTabla=true;
                this.cargando=false;
            },
            error:(err) => {
                console.error("Error recibido: ", err);
                this.error = "No se pudo cargar la lista de colaboradores";
                this.mostrarTabla = false;
                this.cargando=false;
            }
        })
    }
}