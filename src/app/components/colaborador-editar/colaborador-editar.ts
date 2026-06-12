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
export class ColaboradorEditar implements OnInit{
  colaborador:Colaborador = {
    idColaborador:0,
    nombres:'',
    apellidos:'',
    dni:'',
    sexo:'',
    direccion:'',
    idEmpresa:0,
    empresa: 0,
    fechaRegistro:'',
    modificacion: ''
  }

  cargando = false;

  guardando = false;
  mensajeError = '';
  mensajeExito = '';

  constructor(
        private route:ActivatedRoute,
        private router:Router,
        private colaboradorService:ColaboradorService
  ){}

  ngOnInit(): void {
        this.route.paramMap.subscribe( params=>{
          const id = Number(params.get('id'));
          if(!id || id<=0){
            this.mensajeError = 'Id invalido';
          }
          return;
        })
    }

}
