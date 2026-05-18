export interface Empresa {
    idEmpresa:number;
    razonSocial:string;
    ruc:string;
    direccion:string;
}

export interface Colaborador {
    idColaborador:number;
    nombres:string;
    apellidos:string;
    dni:string;
    sexo:string;
    direccion:string;
    idEmpresa:number;
    empresa:Empresa;
    fechaRegistro:string;
    modificacion:string|null;
}