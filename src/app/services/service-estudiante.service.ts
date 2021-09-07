import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Actividad, Asignada, Asignatura, Student, gradoEstudiante, ArchivoArray, Archivo } from '../interface/student_interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { DatePipe, getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServiceEstudianteService {

  private baseUrl: String = environment.baseURL;
  private filename: string;
  private size: string;
  private format: string;
  private fullpath: string;
  private url: string;
  private up: boolean;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  constructor(private http: HttpClient,
    private storage: AngularFireStorage) { }

  getDatos() {
    const URL = `${this.baseUrl}/estudiante/${localStorage.getItem('userId')}`;
    return this.http.get<Student>(URL);
  }

  getGrado() {
    const URL = `${this.baseUrl}/gradoEstudiante/${localStorage.getItem('userId')}`;
    return this.http.get<gradoEstudiante>(URL);

  }

  getAsignaturas1(id_grupo: string) {
    const URL = `${this.baseUrl}/asignaturas/${id_grupo}`;
    return this.http.get<Asignatura>(URL);
  }

  getAsignadas(id_grupo: string, id_asiganaturas) {
    const URL = `${this.baseUrl}/actividadEstudiante/${id_grupo}/${id_asiganaturas}`;
    return this.http.get<Asignada>(URL);
  }

  getActividad(id_actividad: string) {
    const URL = `${this.baseUrl}/detalleActividad/${id_actividad}`;
    return this.http.get<Actividad>(URL);
  }

  cargarArchivo(event, id_actividad: string, id_estudiante: string, id_grado: string, id_grupo: string, id_asig: string) {
    const file = event.target.files[0];
    this.filename = file.name;
    this.size = `${file.size / 1000}`;
    this.format = file.name.split(".");

    this.fullpath = `estudiante/${id_grado}/${id_grupo}/${id_asig}/${id_actividad}/${id_estudiante}`;
    console.log(id_actividad, id_estudiante, id_grado, id_grupo, id_asig)
    const ref = this.storage.ref(this.fullpath);
    const upload = this.storage.upload(this.fullpath, file);

    this.uploadPercent = upload.percentageChanges();


    return upload.snapshotChanges().pipe(finalize(() => {
      ref.getDownloadURL().subscribe((url) => {
        this.uploadPercent = upload.percentageChanges();

        this.downloadURL = ref.getDownloadURL();
        console.log(this.uploadPercent)
        this.url = url;
        const urls = `${this.baseUrl}/cargarActividad`;

        const body = {
          id_actividad,
          id_estudiante,
          peso: this.size,
          formato: this.format[1],
          nombre: this.format[0],
          ruta: this.url,
          fecha: '2021-09-07',
          tipo_archivo: 'evidencia'

        };
        this.up = true;


        return this.http.post<Archivo>(urls, body).pipe(map(res => {
          this.up = true;
          return res.body;
        }), catchError(e => of(e))).subscribe(e => {
          this.up = true;
          console.log(e);
        })

      })
    })).subscribe(res => { })


  }
  // SELECT * FROM asigna NATURAL JOIN ensenia NATURAL JOIN asignaturas WHERE id_grupo = '004g' AND id_asignaturas ='001A'

  cargarActividad(peso: string, formato: string, nombre: string, ruta: string, tipo_archivo: string, id_act: string, id_est: string, fecha: string) {
    /**
     * const id_actividad = req.params.id_actividad;
    const id = req.params.id;
    const { id_archivo, peso, formato, nombre, ruta, fecha } = req.body;
     */

    const body = { id_act, id_est, peso, formato, nombre, ruta, fecha, tipo_archivo };
    const URL = `${this.baseUrl}/cargarActividad`;
    return this.http.post(URL, body);
  }

  /** cargarEntrega(id_act:string,id_est:string , fecha:string, nota:number){
    const body = {id_act, id_est, fecha, nota};
    const URL = `${this.baseUrl}/cargarEntrega`;
    return  this.http.post(URL, body);
  } */



}
