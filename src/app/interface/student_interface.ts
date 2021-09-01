export interface Student{
    
    body: BodyStudent[];
}


export interface BodyStudent {
    id_estudiante:        string;
    id_grupo:      string;
    sexo: string;
    año:string;

}


export interface Asignatura{
    body: AsignaturaArray[];
}

export interface AsignaturaArray{
nombre: string;
}

export interface Asignada{
body: AsignadaArray[];
}

export interface AsignadaArray{
id_asignatura : string;
id_grupo: string;
id_docente: string;
id_actividad: string;
nombre: string;
}

export interface Actividad{
    body: ActividadArray[];
}

export interface ActividadArray{
id_actividad : string;
id_periodo:string;
descripcion: string;
}