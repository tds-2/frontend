// ===================================================================
// SERVICIO DE COLABORADOR
// - Sirve para consumir el backend mediante peticiones http
// ===================================================================

// Importa injectable para crear un servicio en angular
import { Injectable } from "@angular/core";
// Para consumir APIs
import { HttpClient } from "@angular/common/http";
// Para manejar respuestas asincronas
import { Observable } from "rxjs";
// Importa la interfaz colaborador
import { Colaborador } from "../models/colaborador";

// Indica que este servicio estara disponible en toda la aplicacion
@Injectable({
    providedIn:"root"

})

export class ColaboradorService {
    private api="https://localhost:7192/api/colaboradorapi";
    // Hacemos la peticion
    constructor(private http:HttpClient){}
    // Metodo que llama al endpoint listar del backend
    listar():Observable<Colaborador[]>{
        // Hace una peticion Get y devuelve una lista de colaboradores
        return this.http.get<Colaborador[]>(`${this.api}/listar`);
    }

    obtenerDetalle(id:number):Observable<Colaborador>{
        return this.http.get<Colaborador>(`${this.api}/detalle/${id}`);
    }
}