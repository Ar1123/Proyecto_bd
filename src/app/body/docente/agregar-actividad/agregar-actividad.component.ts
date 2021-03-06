import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-actividad',
  templateUrl: './agregar-actividad.component.html',
  styleUrls: ['./agregar-actividad.component.css']
})
export class AgregarActividadComponent implements OnInit {
  items=['Home', 'Actividades', 'Cursos'];
  asignaturas = ['Matematicas', 'Estadistica', 'Gemoetria'];
  grupos: string;
  id:string;
  aniadirTarea:boolean = false;
  archivoCargado:string[] = [];


  constructor(private router: ActivatedRoute) { 
    this.grupos = this.router.snapshot.paramMap.get('curso');
    this.id = this.router.snapshot.paramMap.get('id_grupo');
    console.log(this.id);
    console.log('222222222222222');
    
    
  }

  ngOnInit(): void {


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
