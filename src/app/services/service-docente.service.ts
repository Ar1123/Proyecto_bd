import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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
  private grado:string;
  constructor(private http: HttpClient) { }

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
  getGrupos(){
    
    const URL = `${this.baseUrl}/grupos/${this.idUser}/${this.grado}`;

    return this.http.get<ResponseInterface>(URL)
                    .pipe(
                      map(res=>{
                        return res.body;
                      }),
                      catchError(e=>of(e))
                    )
      

  }

  set idGrado( id:string){
      this.grado = id;
    
  }

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

}


