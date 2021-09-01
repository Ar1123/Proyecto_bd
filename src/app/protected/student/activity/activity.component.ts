import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
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
  constructor(private service:ServiceEstudianteService, private route : ActivatedRoute) { }

  ngOnInit(): void {

this.id_grupo = this.route.snapshot.params.id_grupo;
console.log(this.id_grupo);

this.CargarAsignaturas(this.id_grupo);


  }


  CargarAsignaturas(id:string){

    this.service.getAsignadas(id).subscribe(data=>{
      
this.Actividades = data.body;
console.log(this.Actividades);
    });
   
  }

}
