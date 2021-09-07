import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BodyListActividad } from 'src/app/interface/inteface_tracher';
import { ServiceDocenteService } from 'src/app/services/service-docente.service';
import { element } from 'protractor';

@Component({
  selector: 'app-list-actividades',
  templateUrl: './list-actividades.component.html',
  styleUrls: ['./list-actividades.component.css']
})
export class ListActividadesComponent implements OnInit {

  constructor(    
    private doceteService: ServiceDocenteService,
    private router: ActivatedRoute, ) { }

  items=['Home', 'Actividades', 'Cursos'];
  private id_grupo:string;
  
  listActividades:BodyListActividad[] = [];
  
  ngOnInit(): void {
    this.id_grupo = this.router.snapshot.paramMap.get('id_grupo');

    console.log(this.id_grupo);
    
      this.doceteService.listActividades(this.id_grupo)
                        .subscribe(
                          (res:BodyListActividad[])=>{
                            res.forEach(element => {
                              this.listActividades.push(element);
                            });                            
                          }
                        )
  }


  editar(item){
    console.log(item);
    
  }
}
