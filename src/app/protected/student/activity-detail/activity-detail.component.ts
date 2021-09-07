import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Actividad, ActividadArray, ArchivoArray } from 'src/app/interface/student_interface';
import { ServiceEstudianteService } from 'src/app/services/service-estudiante.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  listaArchivos: string[] = ['archivo.pdf', 'archivo.docx', 'archivo.xls'];  //Este array es de prueba
  //Este aray es de prueba
  archivoCargado: string[] = [];
  aniadirTarea: boolean = false;
  Actividad: ActividadArray[];
  ida: string;
  id_asignatura: string;
  idg: string;
  idgrupo: string;
  size: string;
  fullPath: string;
  name: string;
  tipofile: string;

  arrayArchivo: ArchivoArray[];
  ref: AngularFireStorageReference;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;


  constructor(private service: ServiceEstudianteService, private route: ActivatedRoute,
    private storage: AngularFireStorage) { }

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

  getArchivo(event) {


    const file = event.target.files[0];
    const id_estudiante = localStorage.getItem('userId');

    console.log(this.idgrupo)
    const filePath = `estudiante/${this.idg}/${this.idgrupo}/${this.id_asignatura}/${this.ida}/${id_estudiante}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

  }

  subir(event) {
    const id_estudiante = localStorage.getItem('userId');
    const d = event.target.files[0];
    console.log('estoy aqui')
    this.uploadPercent = this.service.uploadPercent;
    this.downloadURL = this.service.downloadURL;
    console.log(this.ida, id_estudiante, this.idg, this.idgrupo, this.id_asignatura);

  this.service.cargarArchivo(event, this.ida, id_estudiante, this.idg, this.idgrupo, this.id_asignatura);
  }

  cargar() {
    const id_estudiante = localStorage.getItem('userId');
    console.log('estoy en el metodo fuera del subscribe');

    this.ref.getMetadata().subscribe(data => {
      console.log('estoy en el metodo dentro del subscribe');
      this.service.cargarActividad(data.size, data.contentType, data.name, data.fullPath, data.type, id_estudiante, this.ida, '2021-09-07');
    })

    // console.log(peso,formato, nombre, ruta, '2021-09-06', id_act, id_est);
    // this.service.cargarActividad(id_act, id_est,peso+"",formato, nombre, ruta, '2021-09-06',tipo_archivo);
    // this.service.cargarEntrega(id_act, id_est, '2021-09-06', 0);
  }

  /**
   *  cargar(peso:string, formato:string, tipo_archivo:string, nombre:string, ruta:string, id_act:string,id_est:string){

    // console.log(peso,formato, nombre, ruta, '2021-09-06', id_act, id_est);
   // this.service.cargarActividad(id_act, id_est,peso+"",formato, nombre, ruta, '2021-09-06',tipo_archivo);
   // this.service.cargarEntrega(id_act, id_est, '2021-09-06', 0);
  }

  ref.getMetadata().subscribe(dato=>{
this.size = dato.size;
this.name = dato.name;
this.tipofile = dato.contentType;
this.fullPath = dato.fullPath;
this.arrayArchivo = dato;
console.log(this.arrayArchivo);

//this.cargar(dato.size+"",dato.contentType,dato.name, dato.fullPath, this.ida,id_estudiante, dato.type);
// console.log(dato) 
});

console.log(this.arrayArchivo);


const id_estudiante = localStorage.getItem('userId');
    const filePath = `estudiante/${this.idg}/${this.idgrupo}/${this.id_asignatura}/${this.ida}/${id_estudiante}`;
    const ref = this.storage.ref(filePath);
    this.ref = ref;
//this.cargar();
this.ref.getMetadata().subscribe(data=>{
console.log('estoy en el metodo dentro del subscribe', data);
this.service.cargarActividad(data.size, data.contentType,data.name,data.fullPath,data.type,id_estudiante,this.ida, '2021-09-07');
});
console.log(this.ref);
//this.service.cargarActividad(`${dato.size}`,`${dato.contentType}`, dato.name, dato.fullPath, '2021-09-06', this.ida, id_estudiante);
   // this.service.cargarActividad('peso','formato', 'nombre', 'ruta', 'fecha', this.ida, id_estudiante);
   */

}
