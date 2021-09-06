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



  constructor( 
    private  storage: AngularFireStorage,
    private http: HttpClient
    ) { }


  updloadFile(event,id_grado:string, id_grupo:string, id_asignatura:string, id_actividad:string ){
   

 
    const file = event.target.files[0];
    this.fileName = file.name;
    this.size = `${file.size/1000}`;
    this.format = file.name.split(".");

    

    this.filePath =`${this.id_docente}/${id_grado}/${id_grupo}/${id_asignatura}/${this.fileName}`;
    const fileRef = this.storage.ref(this.filePath);
    const upload = this.storage.upload(this.filePath, file);

    
    return upload.snapshotChanges()
          .pipe( 
            finalize(()=>{
                fileRef.getDownloadURL()
                       .subscribe((url)=>{
                         this.url = url;
                         const urls = `${this.baseUrl}/aniadirArchivo`;  
      
                         const body = {
                         
                           id_actividad,
                           peso: this.size,
                           formato:this.format[1],
                           nombre:this.format[0],
                           ruta:this.url,
                           tipo_archivo:'guia'
                        
                       };
                   
                       return  this.http.post<ResponseInterface>(urls,body)
                                         .pipe(
                                           map(res=>{
                                             return res.body;
                                           }),
                                           catchError(e=>of(e))
                                         ).subscribe(e=>{
                                           console.log(e);
                                           
                                         });
                         

                       })
            })
          ).subscribe(


              res=>{
                console.log('ssss', this.url);
                
              }
         
          );
      
              

  }



}
