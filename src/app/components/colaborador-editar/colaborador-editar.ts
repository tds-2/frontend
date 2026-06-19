import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Colaborador } from '../../models/colaborador';
import { ActivatedRoute, Router } from '@angular/router';
import { ColaboradorService } from '../../services/colaborador.service';

@Component({
  selector: 'app-colaborador-editar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './colaborador-editar.html',
  styleUrl: './colaborador-editar.css',
})
export class ColaboradorEditar implements OnInit {
  colaborador: Colaborador = {
    idColaborador: 0,
    nombres: '',
    apellidos: '',
    dni: '',
    sexo: '',
    direccion: '',
    idEmpresa: 0,
    empresa: 0,
    fechaRegistro: '',
    modificacion: ''
  }

  cargando = false;

  guardando = false;
  mensajeError = '';
  mensajeExito = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private colaboradorService: ColaboradorService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!id || id <= 0) {
        this.mensajeError = 'Id invalido';
        return;
      }
      this.cargarDetalle(id);
    });
  }

  cargarDetalle(id: number): void {
    this.cargando = true;
    this.mensajeError = '';
    this.colaboradorService.obtenerDetalle(id).subscribe({
      next: (data) => {
        this.colaborador = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar colaborador', err);
        this.mensajeError = 'No se pudo cargar el colaborador';
        this.cargando = false;
      }
    });
  }

  guardarCambios():void{
    this.mensajeError = '';
    this.mensajeExito = '';
    if(
      !this.colaborador.nombres.trim() || this.colaborador.apellidos.trim() || this.colaborador.dni.trim() ||
      this.colaborador.sexo.trim() || this.colaborador.direccion.trim() || this.colaborador.idEmpresa <= 0
    ){
      this.mensajeError = 'Completa todos los campos obligatorios'
      return;
    }
    this.guardando = true;
    this.colaboradorService.editar(this.colaborador.idColaborador,this.colaborador).subscribe({
      next:() => {
        this.guardando = false;
        this.mensajeExito = 'Colaborador actualizado correctamente';
      },
      error: (err)=>{
        console.error('Error al editar',err);
        this.guardando = false;
        this.mensajeError = 'No se pudo actualizar al colaborador';
      }
    })
  }

  volver():void{
    this.router.navigate(['/']);
  }
}
