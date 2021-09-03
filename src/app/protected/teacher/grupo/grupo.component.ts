import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceDocenteService } from '../../../services/service-docente.service';
import { BodyGrupos, BodyStudent } from '../../../interface/inteface_tracher';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  items=['Home', 'Actividades', 'Cursos'];
  asignaturas = ['Matematicas', 'Estadistica', 'Gemoetria'];

  grupo: BodyGrupos[] = [];
  grupos: string;
  id:string;
  ligrupo1 = [];
  
  event1: boolean = false;
  event2: boolean = false;
  event3: boolean = false;
  event4: boolean = false;
  
 

  constructor(
    private router: ActivatedRoute,
    private doceteService: ServiceDocenteService
    ) { 
    
  }

  ngOnInit(): void {
    this.doceteService.getGrupos()
                      .subscribe(response=>{
                        response.forEach((element:BodyGrupos) => {
                          this.grupo.push(element);
                        });
                        console.log(response);
                        
                      });
  }



  verListado(event){
    this.ligrupo1 = [];
    this.doceteService.getEstdiantes(event)
                      .subscribe((response)=>{
                          response.forEach((element:BodyStudent) => {
                              this.ligrupo1.push(element);
                          });
                      
                      });
                      console.log(event);
                      
    
  }

  grupo1(){
    this.id = "1";
  this.event1 = true;
  }

  grupo2(){
    this.id = "2";

    this.event2 = true;

  }

  grupo3(){
    this.id = "3";

    this.event3 = true;

  }

  grupo4(){
    this.id = "4";

    this.event4 = true;

  }
}
