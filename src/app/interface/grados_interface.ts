export interface GradosInterface {
    ok:         boolean;
    statusCode: number;
    msg:        string;
    body:       Body[];
}

export interface Body {
    grado: string;
}
