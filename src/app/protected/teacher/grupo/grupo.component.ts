import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceDocenteService } from '../../../services/service-docente.service';
import { BodyGrupos, BodyStudent } from '../../../interface/inteface_tracher';
import Swal from 'sweetalert2';
import { BodyGrado } from 'src/app/interface/inteface_tracher';

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
  id_grado:string;
  id_grupo:string;
  grado:String;
  ligrupo1 = [];
  
  
  
 

  constructor(
    private router: ActivatedRoute,
    private routes: Router,
    private doceteService: ServiceDocenteService,
    ) { 
      this.id_grado =   this.router.snapshot.params.id;
     
    
  }

  ngOnInit(): void {
    //obteniendo el grado
    this.doceteService.getGrado(this.id_grado)
                      .subscribe((response:BodyGrado)=>{
                        console.log(response);
                        
                            this.grado = response[0].grado;
                      });

    //Obteniendo los grupos                  
    this.doceteService.getGrupos(this.id_grado)
                      .subscribe(response=>{
                        response.forEach((element:BodyGrupos) => {
                          this.grupo.push(element);
                        });
                        
                      });
  }



  verListado(event){
    this.ligrupo1 = [];
    this.id_grupo = event;
    this.doceteService.getEstdiantes(event)
                      .subscribe((response)=>{
                          response.forEach((element:BodyStudent) => {
                              this.ligrupo1.push(element);
                          });
                      
                      });
                      
    
  }
  asignarActividad(){

    if(this.id_grupo){
      // /school/asignarActividad
        // this.routes.navigate(['school/asignarActividad']);
        console.log('ww', this.grado);
        
        this.routes.navigateByUrl(`school/asignarActividad/${this.id_grado}/${this.id_grupo}`);
        

    }else{
      Swal.fire('Error','Elija un grupo' , 'error');
    }
  }
  verActividades(){

    if(this.id_grupo){
      // /school/asignarActividad
        // this.routes.navigate(['school/asignarActividad']);
        console.log('ww', this.grado);
        
    this.routes.navigateByUrl(`school/listActividades/${this.id_grado}/${this.id_grupo}`);
        

    }else{
      Swal.fire('Error','Elija un grupo' , 'error');
    }
  }

}
