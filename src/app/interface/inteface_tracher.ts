export interface ResponseInterface {
    ok:         boolean;
    statusCode: number;
    msg:        string;
    body:       any[];
}

export interface BodyStudent {
    id_usuario:     string;
    nombres:        string;
    apellidos:      string;
    identificacion: string;
    sexo:           string;
}
export interface BodyGrupos {
    grado:    string;
    id_grado: string;
}


export interface BodyGrados {
    grado: string;
    id_grado:string
}

export interface BodyUsuario {
    nombres:        string;
    apellidos:      string;

}

export interface BodyAuth {
    id_usuario: string;
    rol:        string;
}
export interface BodyGrado {
    grado:        string;
}
export interface BodyGrupo {
    grado:        string;
    posicion:        string;
}
export interface BodyAsignatura {
    nombre:        string;
    id_asignaturas:        string;
}
export interface BodyAsignaturas {
    nombre:        string;
}
export interface BodyActividadRespons3 {
    id_actividad: number, 
    descripcion:  string, 
    fecha_inicial:Date, 
    fecha_limite: Date
}
export interface BodyListActividad {
    id_actividad: string;
    id_grupo: string;
    id_docente: string
    fecha_inicial: Date;
    fecha_limite: Date;
    id_periodo: string;
    descripcion: string
}
export interface BodyPeriodo {
    id_periodo: string;
    anio: string;
    fecha_inicio: Date;
    fecha_fin: Date;
}
export interface BodyActividadPeriodo {
    id_actividad: string,
    id_grupo: string,
    id_docente: string,
    fecha_inicial:Date,
    fecha_limite: Date,
    id_periodo: string;
    descripcion:  string;
}
