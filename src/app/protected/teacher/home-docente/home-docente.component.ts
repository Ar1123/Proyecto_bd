import { Component, OnInit } from '@angular/core';
import { ServiceDocenteService } from '../../../services/service-docente.service';

import { Router } from '@angular/router';
import { BodyGrado, BodyGrados, BodyUsuario } from 'src/app/interface/inteface_tracher';
@Component({
  selector: 'app-home-docente',
  templateUrl: './home-docente.component.html',
  styleUrls: ['./home-docente.component.css']
})
export class HomeDocenteComponent implements OnInit {

  
  items=['Home', 'Actividades', 'Cursos'];

  asignaturas=['Matematicas', 'Ciencias Naturales', 'Quimica','Sociales'];
  cursos = ['Sexto', 'Septimo', 'Octavo', 'Noveno', 'Decimo', 'Once'];

  grados: BodyGrados[] =[];
   grado:string = 'aaa';


    user:BodyUsuario
    get(){
      return {...this.user}
    }
  constructor( 
    private docenteService: ServiceDocenteService,
    private router: Router
    ) { 
    
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
        response.forEach(element => {
          this.grados.push(element);
          
        });
      }
    );
  
  }

  verGrupo(event){
    
      if(event.target.value){
       
      this.router.navigate(['school/grupo', event.target.value]);

      }
  }





  
}
