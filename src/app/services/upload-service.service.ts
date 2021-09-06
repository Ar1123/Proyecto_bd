import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  private  id_docente:string = localStorage.getItem('userId');
  private fileName:string;
  private filePath:string;
  private size:string;
  private format:string;
  private url:string;
  private fileType:string;



  constructor( private  storage: AngularFireStorage) { }


  updloadFile(event,id_grado:string, id_grupo:string, id_asignatura:string ){
   
    const file = event.target.files[0];
    this.fileName = file.name;
    this.filePath =`${this.id_docente}/${id_grado}/${id_grupo}/${id_asignatura}/${this.fileName}`;
    const fileRef = this.storage.ref(this.filePath);
    const upload = this.storage.upload(this.filePath, file);
    upload.snapshotChanges()
          .pipe( 
            finalize(()=>{
                fileRef.getDownloadURL()
                       .subscribe(url=>{
                         console.log(url);
                         
                       })
                  
            })
          ).subscribe(
            response =>{
              console.log(response, 'response');
              
            }
          );


  }



}
