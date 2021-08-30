export interface UserInterface {
    ok:         boolean;
    statusCode: number;
    msg:        string;
    body:       BodyUsuario[];
}

export interface BodyUsuario {
    nombres:        string;
    apellidos:      string;

}