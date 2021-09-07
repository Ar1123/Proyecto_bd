import { Component, OnInit } from '@angular/core';
import { ServiceDocenteService } from '../../../services/service-docente.service';

import { Router } from '@angular/router';
import { BodyAsignaturas, BodyGrado, BodyGrados, BodyUsuario } from 'src/app/interface/inteface_tracher';
import { element } from 'protractor';
@Component({
  selector: 'app-home-docente',
  templateUrl: './home-docente.component.html',
  styleUrls: ['./home-docente.component.css']
})
export class HomeDocenteComponent implements OnInit {

  
  items=['Home', 'Actividades', 'Cursos'];
  asignaturas:BodyAsignaturas[] =[];
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




    //Obteniendo Datos del usuario
    this.docenteService.getDatosUsuario().subscribe(
      response =>{
        this.user ={
          apellidos:  response[0]['apellidos'],
          nombres:  response[0]['nombres']
        }           
      }
      
    );
    //obteniendo asignaturas impartidas
      this.docenteService.getAsignaturas()
                          .subscribe(
                            (res:BodyAsignaturas[])=>{
                                res.forEach(element => {
                                  this.asignaturas.push(element);
                                });
                            }
                          )    

    //Obteniedo grados
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
