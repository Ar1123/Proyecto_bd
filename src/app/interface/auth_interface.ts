export interface ResponseInterface {
    ok:         boolean;
    statusCode: number;
    msg:        string;
    body:       Body[];
}

export interface Body {
    id_usuario: string;
    rol:        string;
}