import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadArray, AsignadaArray } from 'src/app/interface/student_interface';
import { ServiceEstudianteService } from 'src/app/services/service-estudiante.service';

@Component({
  selector: 'app-actividad-asignatura',
  templateUrl: './actividad-asignatura.component.html',
  styleUrls: ['./actividad-asignatura.component.css']
})
export class ActividadAsignaturaComponent implements OnInit {

  items:String[] = ['Home', 'Actividades', 'Contacto'];
  listaAsignaturas:String[] =[
    'Matematicas', 'Filosofia','Ciencias Naturales',
    'Geometria','Estadistica', 'Religion'
  ];

  Actividades: ActividadArray[];
  id_grupo:string;
  nombre:string;

  constructor(private service:ServiceEstudianteService, private route : ActivatedRoute) { }

  ngOnInit(): void {
     this.id_grupo = this.route.snapshot.params.id_grupo;
     this.nombre = this.route.snapshot.params.nombre
console.log(this.id_grupo, this.nombre);
  }

  cargarActividades(id_grupo:string, nombre:string){
    // this.service.getActividadAsignatura(id_grupo, nombre).subscribe(data=>{
      
    //   this.Actividades = data.body;
    //   console.log(this.Actividades);
    //       });
  }

}
