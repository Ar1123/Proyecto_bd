import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { Actividad, ActividadArray } from 'src/app/interface/student_interface';
import { ServiceEstudianteService } from 'src/app/services/service-estudiante.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  listaArchivos:string[]  = ['archivo.pdf', 'archivo.docx', 'archivo.xls'];  //Este array es de prueba
 //Este aray es de prueba
    archivoCargado:string[] = [];
    aniadirTarea:boolean = false;
    Actividad: ActividadArray[];
    ida:string;
    id_asignatura:string;
    idg: string;
    idgrupo:string;
    size:string;
    fullPath:string;
    name:string;
    tipofile:string;
  
  constructor(private service:ServiceEstudianteService, private route : ActivatedRoute,
    private storage: AngularFireStorage) { }

  ngOnInit(): void {
  this.ida =  this.route.snapshot.params.id_actividad;
   this.id_asignatura = this.route.snapshot.params.id_asignaturas;

  //  console.log(this.ida, this.id_asignatura);
  this.cargarDetalles(this.ida);

  
this.service.getGrado().subscribe(data=>{
  data.body.map(d =>{
    this.idg = d.id_grado;
    // console.log(d);
  })


  
})

this.service.getDatos().subscribe(datos=>{
  datos.body.map(d=>{
    this.idgrupo = d.id_grupo;
    
  })
})

  }

  cargarDetalles(ida:string){
this.service.getActividad(ida).subscribe(data=>{
  this.Actividad = data.body;
  // console.log(this.Actividad);
})
  }
  aniadir():void{
    this.aniadirTarea = true;    
    }
    cancelar():void{
      this.aniadirTarea = false;    
    }
  
    getArchivo(event){

      
      const file = event.target.files[0];
      const id_estudiante = localStorage.getItem('userId');

console.log(this.idgrupo)
    const filePath = `estudiante/${this.idg}/${this.idgrupo}/${this.id_asignatura}/${this.ida}/${id_estudiante}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    
    
    }

    subir(){
      const id_estudiante = localStorage.getItem('userId');
      const filePath = `estudiante/${this.idg}/${this.idgrupo}/${this.id_asignatura}/${this.ida}/${id_estudiante}`;
      const ref = this.storage.ref(filePath);
ref.getMetadata().subscribe(dato=>{
  this.size = dato.size;
  this.name = dato.name;
  this.tipofile = dato.contentType;
  this.fullPath = dato.fullPath;

  this.cargar(dato.size+"",dato.contentType,dato.name, dato.fullPath, this.ida,id_estudiante, dato.type);
  // console.log(dato) 
})


//this.service.cargarActividad(`${dato.size}`,`${dato.contentType}`, dato.name, dato.fullPath, '2021-09-06', this.ida, id_estudiante);
     // this.service.cargarActividad('peso','formato', 'nombre', 'ruta', 'fecha', this.ida, id_estudiante);
    }

    cargar(peso:string, formato:string, tipo_archivo:string, nombre:string, ruta:string, id_act:string,id_est:string){
      // console.log(peso,formato, nombre, ruta, '2021-09-06', id_act, id_est);
      this.service.cargarActividad(peso+"",formato, nombre, ruta, tipo_archivo);
      this.service.cargarEntrega(id_act, id_est, '2021-09-06', 0);
    }

}
