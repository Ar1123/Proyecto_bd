import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsignaturaArray, BodyStudent } from 'src/app/interface/student_interface';
import { ServiceEstudianteService } from 'src/app/services/service-estudiante.service';



interface DatoStudent{
    id_estudiante: string;
    id_grupo: string;
    sexo: string;
    fecha: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})



export class InicioComponent implements OnInit {

  items:String[] = ['Home', 'Asignaturas', 'Historial Notas'];
  listaAsignaturas:String[] =[
    'Matematicas', 'Filosofia','Cienacias Naturales',
    'Geometria','Estadistica', 'Religion'
  ];// NOTA: se debe llenar de acuerdo al grado

  datos: DatoStudent[];
  id_grupo: string;
  nombre:string;
  apellido:string;
  Asignaturas: AsignaturaArray[];
   

  constructor(private service:ServiceEstudianteService, private route:Router) { }

  ngOnInit(): void {
    this.service.getDatos().subscribe(data=>{
      // console.log(data.body);
      data.body.map(datos=>{

        this.id_grupo = datos.id_grupo; 
        this.nombre = datos.nombres;
        this.apellido = datos.apellidos;



        this.service.getAsignaturas1(this.id_grupo).subscribe(data=>{
          // console.log(this.id_grupo)
          console.log(data.body)
          
          this.Asignaturas = data.body;
          for (let index = 0; index < this.Asignaturas.length; index++) {
            // console.log(this.Asignaturas[index].nombre);
            
          }
          // console.log(this.Asignaturas)
         
        });
      });


    });


    
  }


  verActividades(item){
    console.log(this.id_grupo);
    console.log(item);
    
this.route.navigateByUrl(`school/actividades/${this.id_grupo}/${item}`);
  }

}
