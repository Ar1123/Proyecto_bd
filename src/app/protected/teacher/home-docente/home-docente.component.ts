import { Component, OnInit } from '@angular/core';
import { ServiceDocenteService } from '../../../services/service-docente.service';
import {BodyUsuario } from '../../../interface/user_interface';
import { GradosInterface } from '../../../interface/grados_interface';
@Component({
  selector: 'app-home-docente',
  templateUrl: './home-docente.component.html',
  styleUrls: ['./home-docente.component.css']
})
export class HomeDocenteComponent implements OnInit {

  
  items=['Home', 'Actividades', 'Cursos'];

  asignaturas=['Matematicas', 'Ciencias Naturales', 'Quimica','Sociales'];
  cursos = ['Sexto', 'Septimo', 'Octavo', 'Noveno', 'Decimo', 'Once'];

  grados: GradosInterface[] =[];

    user:BodyUsuario
    get(){
      return {...this.user}
    }
  constructor( private docenteService: ServiceDocenteService) { 
    
  }
  
  ngOnInit(): void {
    this.docenteService.getDatosUsuario().subscribe(
      response =>{
        this.user ={
          apellidos:  response[0]['apellidos'],
          nombres:  response[0]['nombres']
        }           
      }
      
    );
    this.docenteService.getGrados().subscribe(
      response =>{
        // this.grados.push(response);
        response.forEach(element => {
          this.grados.push(element);
          
        });
      }
    );
  
  }


  
}
