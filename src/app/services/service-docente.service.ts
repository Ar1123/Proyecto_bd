import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, reduce, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

// import { GradosInterface } from '../interface/grados_interface';
// import { GruposInterface } from '../interface/grupos_interface';
import { ResponseInterface, BodyStudent } from '../interface/inteface_tracher';

@Injectable({
  providedIn: 'root'
})
export class ServiceDocenteService {

  private baseUrl:String  = environment.baseURL;
  private idUser:String = localStorage.getItem('userId');

  constructor(private http: HttpClient) { }

  //Obtiene el nombre y apellido del docente
  getDatosUsuario(){
    
    const URL = `${this.baseUrl}/datosUser/${this.idUser}`;
    return  this.http.get<ResponseInterface>(URL).
    pipe(
    
      map(res=>{
        return res.body;
      }),
      catchError(e=>of(e))
    ) 
  }
  //Obtiene los grados donde el docenet da clases
  getGrados(){
    const URL = `${this.baseUrl}/grados/${localStorage.getItem('userId')}`;

    return  this.http.get<ResponseInterface>(URL).
    pipe(
    
      map(res=>{        
        return res.body;
      }),
      catchError(e=>of(e))
    )
  }
  //obtiene los grupos donde el docente da clases de acuerdo al grado
  getGrupos(grado:String){
    
    const URL = `${this.baseUrl}/grupos/${this.idUser}/${grado}`;

    return this.http.get<ResponseInterface>(URL)
                    .pipe(
                      map(res=>{
                        return res.body;
                      }),
                      catchError(e=>of(e))
                    )

  }


//Obtiene el noombre de los estudiante de acuero al grado y grupo 
  getEstdiantes(grado:string) {
  const URL = `${this.baseUrl}/lista/${grado}`;
    return this.http.get<ResponseInterface>(URL)
              .pipe(
                map(res=>{
                  return  res.body;
                 }),
                 catchError(e=>of(e))
              );
  }

  getGrado(id_grado:string){
    const URL = `${this.baseUrl}/grado/${id_grado}`;
    return this.http.get<ResponseInterface>(URL)
               .pipe(
                  map(res=>{
                     return res.body; 
                  }), 
                  catchError(e=>of(e))
               );
  }

  getGrupo( id_grado:string, id_grupo:string){
    const url = `${this.baseUrl}/grupo/${id_grupo}/${id_grado}`;
    console.log(url);
    
    return this.http.get<ResponseInterface>(url)
                .pipe(map(res=>{
                  return res.body;
                }),
                catchError(e=>of(e))
                );
    
  }
  getAsignatura(grupo:string){
    
    const ulr = `${this.baseUrl}/asignatura/${grupo}/${this.idUser}`;
    return this.http.get<ResponseInterface>(ulr)
                    .pipe(
                        map(res=>{
                          return res.body;
                        }),
                        catchError(e=>of(e))
                    );

  }

}


