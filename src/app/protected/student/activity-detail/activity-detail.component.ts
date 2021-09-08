import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { Actividad, ActividadArray, Archivo, ArchivoArray, entrega, nombreArchivo, nombreArchivoArray } from 'src/app/interface/student_interface';
import { ServiceEstudianteService } from 'src/app/services/service-estudiante.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})


export class ActivityDetailComponent implements OnInit {

  @ViewChild("archivo", {
    read: ElementRef
  })
  archivo: ElementRef;


  nombre: nombreArchivoArray[];

  listaArchivos: string[] = ['archivo.pdf', 'archivo.docx', 'archivo.xls'];  //Este array es de prueba
  //Este aray es de prueba
  archivoCargado: string[] = [];
  aniadirTarea: boolean = false;
  Actividad: ActividadArray[];
  ida: string;
  id_asignatura: string;
  idg: string;
  idgrupo: string;
  //**************************** VARIABLES PARA CARGAR EL ARCHIVO ****************************************** */
  private baseUrl: String = environment.baseURL;
  private filename: string;
  private size: string;
  private format: string;
  private fullpath: string;
  private url: string;
  private up: boolean;
  arrayArchivo: ArchivoArray[];
  ref: AngularFireStorageReference;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  //******************************************************** ****************************************** */

mostrar: boolean = false;
  arrayEvidencia: entrega;

  constructor(private service: ServiceEstudianteService, private route: ActivatedRoute,
    private storage: AngularFireStorage, private http: HttpClient) { }

  ngOnInit(): void {
    this.ida = this.route.snapshot.params.id_actividad;
    this.id_asignatura = this.route.snapshot.params.id_asignaturas;

    //  console.log(this.ida, this.id_asignatura);
    this.cargarDetalles(this.ida);


    this.service.getGrado().subscribe(data => {
      data.body.map(d => {
        this.idg = d.id_grado;
        console.log(this.idg);
      })

    })

    this.service.getDatos().subscribe(datos => {
      datos.body.map(d => {
        this.idgrupo = d.id_grupo;
        console.log(this.idgrupo);

      })
    })
    this.verificar();

  }

  cargarDetalles(ida: string) {
    this.service.getActividad(ida).subscribe(data => {
      this.Actividad = data.body;
      // console.log(this.Actividad);
    })
  }
  aniadir(): void {
    this.aniadirTarea = true;
  }
  cancelar(): void {
    this.aniadirTarea = false;
  }


  cargarArchivo(event) {
    const file = event.target.files[0];
    this.filename = file.name;
    this.size = `${file.size / 1000}`;
    this.format = file.name.split(".");
    const id_estudiante = localStorage.getItem('userId');
    this.nombre = this.archivo.nativeElement.files[0].name;
    console.log(this.nombre);

    this.fullpath = `estudiante/${this.idg}/${this.idgrupo}/${this.id_asignatura}/${this.ida}/${id_estudiante}/${this.nombre}`;
    //console.log(id_actividad, id_estudiante, id_grado, id_grupo, id_asig)
    const ref = this.storage.ref(this.fullpath);
    const upload = this.storage.upload(this.fullpath, file);

    this.uploadPercent = upload.percentageChanges();


    return upload.snapshotChanges().pipe(finalize(() => {
      ref.getDownloadURL().subscribe((url) => {
        //  this.uploadPercent = upload.percentageChanges();

        this.downloadURL = ref.getDownloadURL();
        console.log(this.uploadPercent)
        this.url = url;
        const urls = `${this.baseUrl}/cargarActividad`;

        const body = {
          id_actividad: this.ida,
          id_estudiante: id_estudiante,
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

  verEntrega() {
    const id = localStorage.getItem('userId');
this.mostrar = true;
    this.service.obtenerActividad(id).subscribe(data => {
      data.body.map(d => {
        
        this.format = d.formato;
        this.filename = d.nombre;
        this.url = d.ruta;

      })

    })
  }

  verificar(){
    const id = localStorage.getItem('userId');

    this.service.obtenerActividad(id).subscribe(data => {
      data.body.map(d => {
        if(d){
          this.mostrar = false;
        }
       

      })

    })
  }
  

  eliminarArchivo(){
    const id = localStorage.getItem('userId');
    
    this.service.obtenerActividad(id).subscribe(data => {
      data.body.map(d => {
        this.format = d.formato;
        this.filename = d.nombre;
        this.url = d.ruta;
this.fullpath = `estudiante/${this.idg}/${this.idgrupo}/${this.id_asignatura}/${this.ida}/${id}/${this.filename}.${this.format}`;
 this.storage.ref(this.fullpath).delete();
this.service.eliminarArchivo(id,this.ida,this.filename);


console.log(this.fullpath);

      })

    })
  }

}
