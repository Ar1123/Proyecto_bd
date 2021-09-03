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


export interface BodyGrado {
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