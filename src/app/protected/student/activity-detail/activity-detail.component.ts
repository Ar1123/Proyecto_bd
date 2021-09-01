import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actividad, ActividadArray } from 'src/app/interface/student_interface';
import { ServiceEstudianteService } from 'src/app/services/service-estudiante.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  listaArchivos:string[]  = ['archivo.pdf', 'archivo.docx', 'archivo.xls'];  //Este array es de prueba
  listaEnlaces:string[]   = [
    'https://www.youtube.com/watch?v=qhAbg_eVXSw&list=RDqhAbg_eVXSw&start_radio=1', 
    'https://www.youtube.com/watch?v=8wGN7D03Nho&list=RDqhAbg_eVXSw&index=4',];  //Este aray es de prueba
  archivoCargado:string[] = [];
  aniadirTarea:boolean = false;
  Actividad: ActividadArray[];
  ida:string;
  asignatura:string;
  
  constructor(private service:ServiceEstudianteService, private route : ActivatedRoute) { }

  ngOnInit(): void {
  this.ida =  this.route.snapshot.params.id_actividad;
   this.asignatura = this.route.snapshot.params.nombre;

   console.log(this.ida, this.asignatura);
this.cargarDetalles(this.ida);

  }

  cargarDetalles(ida:string){
this.service.getActividad(ida).subscribe(data=>{
  this.Actividad = data.body;
  console.log(this.Actividad);
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

}
