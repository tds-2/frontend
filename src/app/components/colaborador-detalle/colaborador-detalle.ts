
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { ColaboradorService } from "../../services/colaborador.service";
import { Colaborador } from "../../models/colaborador";



@Component({
    selector: 'app-colaborador-detalle',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './colaborador-detalle.html',
    styleUrl: './colaborador-detalle.css'
})

export class ColaboradorDetalle implements OnInit{
    colaborador:Colaborador | null = null;
    cargando:boolean = false;
    mensajeError:string = '';

    // Inyectamos la ruta y servicio
    constructor(
        private route:ActivatedRoute,
        private router:Router,
        private colaboradorService:ColaboradorService
    ){}

    // Iniciamos el componente
    ngOnInit(): void {
        // Obtiene el id de la ruta
        const id= Number(this.route.snapshot.paramMap.get('id'));
        //Validamos el id
        if(!id || id<=0){
            this.mensajeError = 'Id invalido';
            return;
        }

        this.cargarDetalle(id);
    }

    // Programamos la consulta del detalle colaborador
    cargarDetalle(id:number):void{
        this.cargando = true;
        this.mensajeError = '';
        this.colaboradorService.obtenerDetalle(id).subscribe(
            {
                next:(data)=>{
                    this.colaborador = data;
                    this.cargando = false;
                },
                error: (err) => {
                    console.error("Error en obtener detalle: ",err);
                    this.mensajeError = 'No se pudo cargar el detalle de colaborador';
                    this.cargando = false;
                }
            }
        )
    }

    // Regresa al listado
    volver():void{
        this.router.navigate(['/'])
    }
}