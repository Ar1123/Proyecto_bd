import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadServiceService } from 'src/app/services/upload-service.service';
import { ServiceDocenteService } from '../../../services/service-docente.service';
import { BodyGrupo, BodyAsignatura } from '../../../interface/inteface_tracher';

@Component({
  selector: 'app-agregar-actividad',
  templateUrl: './agregar-actividad.component.html',
  styleUrls: ['./agregar-actividad.component.css']
})
export class AgregarActividadComponent implements OnInit {

  items=['Home', 'Actividades', 'Cursos'];
  private id_grado: string;
  private id_grupo:string;
  
  aniadirTarea:boolean = false;
  archivoCargado:string[] = [];

  grado: string;
  posicion:string;
  asiganatura:string;



  constructor(
    private router: ActivatedRoute, 
    private serviceup: UploadServiceService,
    private serviceDicente:ServiceDocenteService 
    ) { }

  ngOnInit(): void {
    this.id_grado = this.router.snapshot.paramMap.get('id_grado');
    this.id_grupo = this.router.snapshot.paramMap.get('id_grupo');
    
    this.serviceDicente.getGrupo(this.id_grado, this.id_grupo).
                    subscribe(
                          (response:BodyGrupo) =>{
                                console.log(response);
                                
                            this.grado = response[0].grado;
                            this.posicion = response[0].posicion;
                          }
    );

    this.serviceDicente.getAsignatura(this.id_grupo)
                        .subscribe((response:BodyAsignatura)=>{
                          console.log(response);
                          
                          this.asiganatura = response[0].nombre
                        })      



    
  }

  aniadir():void{
    this.aniadirTarea = true;    
    }
    cancelar():void{
      this.aniadirTarea = false;    
    }
  
    getArchivo(e){
      const d = e.target.files[0].name;    
      console.log(d);    
      if(d!=''){
        this.archivoCargado.push(d);        
      }
    }



    //Evento que se gatilla cuando el input de tipo archivo cambia

    
}
