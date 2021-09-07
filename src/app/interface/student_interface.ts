export interface Student {

    body: BodyStudent[];
}


export interface BodyStudent {
    id_estudiante: string;
    id_grupo: string;
    sexo: string;
    año: string;
    nombres: string;
    apellidos: string;

}


export interface Asignatura {
    body: AsignaturaArray[];
}

export interface AsignaturaArray {
    nombre: string;
    id_asignaturas: string;
}

export interface Asignada {
    body: AsignadaArray[];
}

export interface AsignadaArray {
    id_asignatura: string;
    id_grupo: string;
    id_docente: string;
    id_actividad: string;
    nombre: string;
}

export interface Actividad {
    body: ActividadArray[];
}

export interface ActividadArray {
    id_actividad: string;
    id_periodo: string;
    descripcion: string;
}

export interface gradoEstudiante {
    body: gradoEstudianteArray[];
}

export interface gradoEstudianteArray {
    id_grado: string;
    posicion: string;
}
export interface Archivo {
    body: ArchivoArray[]
}

export interface ArchivoArray {
    id_act:string,
    id_est:string,
    peso: string,
    formato: string,
    nombre:string,
    ruta:string,
    fecha:string,
    tipo_archivo: string,
}