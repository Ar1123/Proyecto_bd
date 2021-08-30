import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { UserInterface,BodyUsuario  } from '../interface/user_interface';
import { GradosInterface } from '../interface/grados_interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceDocenteService {

  private baseUrl:String  = environment.baseURL;
  constructor(private http: HttpClient) { }

  getDatosUsuario(){
    
    const URL = `${this.baseUrl}/datosUser/${localStorage.getItem('userId')}`;
    return  this.http.get<UserInterface>(URL).
    pipe(
    
      map(res=>{
        return res.body;
      }),
      catchError(e=>of(e))
    ) 
  }

  getGrados(){
    const URL = `${this.baseUrl}/grados/${localStorage.getItem('userId')}`;

    return  this.http.get<GradosInterface>(URL).
    pipe(
    
      map(res=>{        
        return res.body;
      }),
      catchError(e=>of(e))
    ) 
    

  }
}


