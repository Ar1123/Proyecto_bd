import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Actividad, Asignada, Asignatura, Student } from "../interface/student_interface";

@Injectable({
  providedIn: 'root'
})
export class ServiceEstudianteService {

  private baseUrl:String  = environment.baseURL;


  constructor(private http: HttpClient) { }

  getDatos(){
    const URL = `${this.baseUrl}/estudiante/${localStorage.getItem('userId')}`;
    return  this.http.get<Student>(URL);
  }

  getAsignaturas1(id_grupo: string){
    const URL = `${this.baseUrl}/asignaturas/${id_grupo}`;
    return  this.http.get<Asignatura>(URL); 
  }

  getAsignadas(id_grupo: string){
    const URL = `${this.baseUrl}/actividadEstudiante/${id_grupo}`;
    return  this.http.get<Asignada>(URL); 
  }

  getActividad(id_actividad:string){
    const URL = `${this.baseUrl}/detalleActividad/${id_actividad}`;
    return  this.http.get<Actividad>(URL); 
  }

  
}
