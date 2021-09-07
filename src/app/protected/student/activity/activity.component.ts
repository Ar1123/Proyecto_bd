import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AsignadaArray, AsignaturaArray } from 'src/app/interface/student_interface';
import { ServiceEstudianteService } from 'src/app/services/service-estudiante.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  items:String[] = ['Home', 'Actividades', 'Contacto'];
  listaAsignaturas:String[] =[
    'Matematicas', 'Filosofia','Ciencias Naturales',
    'Geometria','Estadistica', 'Religion'
  ];

  Actividades: AsignadaArray[];
  id_grupo:string;
  id_asignatura:string;
  constructor(private service:ServiceEstudianteService, private route : ActivatedRoute,
    private nav: Router) { }

  ngOnInit(): void {

this.id_grupo = this.route.snapshot.params.id_grupo;
this.id_asignatura = this.route.snapshot.params.id_asignatura;
console.log(this.id_asignatura);

this.CargarAsignaturas(this.id_grupo);


  }


  CargarAsignaturas(id:string){

    this.service.getAsignadas(id, this.id_asignatura).subscribe(data=>{
      console.log(data.body);
      
this.Actividades = data.body;
console.log(this.Actividades);
    });
   
  }

  verArctividad(item){


    // this.nav.navigateByUrl(`school/detalleActividad/${item.id_actividad}/${item.id_asignaturas}`);
    console.log(item);
    
  }

}
