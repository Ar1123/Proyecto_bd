import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Actividad, Asignada, Asignatura, Student, gradoEstudiante } from '../interface/student_interface';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ServiceEstudianteService {

  private baseUrl:String  = environment.baseURL;


  constructor(private http: HttpClient,
    private storage: AngularFireStorage) { }

  getDatos(){
    const URL = `${this.baseUrl}/estudiante/${localStorage.getItem('userId')}`;
    return  this.http.get<Student>(URL);
  }
  
  getGrado(){
    const URL = `${this.baseUrl}/gradoEstudiante/${localStorage.getItem('userId')}`;
    return  this.http.get<gradoEstudiante>(URL);

  }

  getAsignaturas1(id_grupo: string){
    const URL = `${this.baseUrl}/asignaturas/${id_grupo}`;
    return  this.http.get<Asignatura>(URL); 
  }

  getAsignadas(id_grupo: string, id_asiganaturas){
    const URL = `${this.baseUrl}/actividadEstudiante/${id_grupo}/${id_asiganaturas}`;
    return  this.http.get<Asignada>(URL); 
  }

  getActividad(id_actividad:string){
    const URL = `${this.baseUrl}/detalleActividad/${id_actividad}`;
    return  this.http.get<Actividad>(URL); 
  }

  cargarArchivo(event, id_act:string, id_est:string){
    const file = event.target.files[0];
    const filePath = `estudiante/${id_act}`+`${id_est}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);


  }
  // SELECT * FROM asigna NATURAL JOIN ensenia NATURAL JOIN asignaturas WHERE id_grupo = '004g' AND id_asignaturas ='001A'

  cargarActividad( peso:string, formato:string, nombre:string, ruta:string,  tipo_archivo:string){
    /**
     * const id_actividad = req.params.id_actividad;
    const id = req.params.id;
    const { id_archivo, peso, formato, nombre, ruta, fecha } = req.body;
     */

    const body = {peso, formato, nombre, ruta,tipo_archivo};
    const URL = `${this.baseUrl}/cargarActividad`;
    return  this.http.post(URL, body);
  }

  cargarEntrega(id_act:string,id_est:string , fecha:string, nota:number){
    const body = {id_act, id_est, fecha, nota};
    const URL = `${this.baseUrl}/cargarEntrega`;
    return  this.http.post(URL, body);
  }

  
}
