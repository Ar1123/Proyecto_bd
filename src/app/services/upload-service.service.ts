import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResponseInterface } from '../interface/inteface_tracher';


@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  private baseUrl:String  = environment.baseURL;
  private  id_docente:string = localStorage.getItem('userId');
  private fileName:string;
  private filePath:string;
  private size:string;
  private format:string;
  private url:string;
  private fileType:string;

  public up: boolean = false;
  public  fl:number;
get upd(){
  return this.fl;

}


  constructor( 
    private  storage: AngularFireStorage,
    private http: HttpClient
    ) { }


  updloadFile(
    url:string, 
    name:string,
    formato:string, 
    peso:string, 
    id_actividad:string ){
   const urls = `${this.baseUrl}/aniadirArchivo`;   
  
   const body = {                        
                    id_actividad,
                    peso: peso,
                    formato:formato,
                    nombre:name,
                    ruta:url,
                    tipo_archivo:'guia'
                        
                };

                   
            return  this.http.post<ResponseInterface>(urls,body)
                       .pipe(
                         map(res=>{
                          this.up = true;
                           return res.body;
                         }),
                         catchError(e=>of(e))
                       );
                      }





  //______________________________-
    //Tarea para subir archivo
    public tareaCloudStorage(nombreArchivo: string, datos: any) {
      return this.storage.upload(nombreArchivo, datos);
    }
  
    //Referencia del archivo
    public referenciaCloudStorage(nombreArchivo: string) {
      return this.storage.ref(nombreArchivo);
    }
}
