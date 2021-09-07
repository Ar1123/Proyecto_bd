import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BodyListActividad, BodyPeriodo } from 'src/app/interface/inteface_tracher';
import { ServiceDocenteService } from 'src/app/services/service-docente.service';
import { element } from 'protractor';
import { BodyActividadPeriodo } from '../../../interface/inteface_tracher';

@Component({
  selector: 'app-list-actividades',
  templateUrl: './list-actividades.component.html',
  styleUrls: ['./list-actividades.component.css']
})
export class ListActividadesComponent implements OnInit {

  constructor(    
    private doceteService: ServiceDocenteService,
    private router: ActivatedRoute, 
    private route:Router) { }

  items=['Home', 'Actividades', 'Cursos'];
  private id_grupo:string;
  private id_grado:string;
  periodo: BodyPeriodo[] =[];
  listActividades:BodyActividadPeriodo[] = [];
  id_periodo:string;
  
  ngOnInit(): void {
    this.id_grupo = this.router.snapshot.paramMap.get('id_grupo');
    this.id_grado = this.router.snapshot.paramMap.get('id_grado');

    console.log(this.id_grupo);
    
    this.doceteService.periodos()
    .subscribe(
      res=>{
        res.forEach(element => {
           this.periodo.push(element);
        });
      }
    );
    


  }


  editar(item){
    console.log(item);
    this.route.navigateByUrl(`school/editarActividad/${this.id_grado}/${this.id_grupo}/${item.id_actividad}`);    
  }
  periodos(item){
    this.listActividades = [];
    this.id_periodo = item.id_periodo;     
    this.doceteService.listActividades(this.id_periodo, this.id_grupo)
    .subscribe(
      (res:BodyActividadPeriodo[])=>{
        
        if(res.length>0){
          res.forEach(element => {
          
         
            this.listActividades.push(element);
          });   
        }                         
      }
    )   
  }
}
