import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { UploadServiceService } from 'src/app/services/upload-service.service';
import { ServiceDocenteService } from '../../../services/service-docente.service';
import { BodyGrupo, BodyAsignatura, BodyActividadRespons3, BodyPeriodo } from '../../../interface/inteface_tracher';

import * as _moment from 'moment';
import Swal from 'sweetalert2';
const moment = _moment;
@Component({
  selector: 'app-agregar-actividad',
  templateUrl: './agregar-actividad.component.html',
  styleUrls: ['./agregar-actividad.component.css']
})
export class AgregarActividadComponent implements OnInit {

  items=['Home', 'Actividades', 'Cursos'];
  private id_grado: string;
  private id_grupo:string;
   id_actividad:string;
  aniadirTarea:boolean = false;
  private id_asignatura:string;
  archivoCargado:string[] = [];
  visible:boolean = false;
  periodo: BodyPeriodo[] =[];

  id_periodo:string;
  periodoSelect:string;

  grado: string;
  posicion:string;
  asiganatura:string;


  constructor(
    private router: ActivatedRoute,
    private serviceup: UploadServiceService,
    private serviceDicente:ServiceDocenteService,
    private fb: FormBuilder,
    ) { }

    //esto se carga al inicar la pestaña
  ngOnInit(): void {

    //Obteniendo id
    this.id_grado = this.router.snapshot.paramMap.get('id_grado');
    this.id_grupo = this.router.snapshot.paramMap.get('id_grupo');


    this.serviceDicente.periodos()
                       .subscribe(
                         res=>{
                           res.forEach(element => {
                              this.periodo.push(element);
                           });
                         }
                       )
    //obteniendo grupo
    this.serviceDicente.getGrupo(this.id_grado, this.id_grupo).
                    subscribe(
                          (response:BodyGrupo) =>{
                            this.grado = response[0].grado;
                            this.posicion = response[0].posicion;
                          }
    );
    //obteniendo asignatura
    this.serviceDicente.getAsignatura(this.id_grupo)
                        .subscribe((response:BodyAsignatura)=>{
                         this.id_asignatura = response[0].id_asignaturas;
                         this.asiganatura = response[0].nombre;
                        });
  }

  formulario:FormGroup = this.fb.group({
    descripcion: ['',[Validators.required]],
    fechaLimite:['', [Validators.required]]
  });

  crearActividad(){
    const {descripcion, fechaLimite} = this.formulario.value;

    const formatoActual = new Date(fechaLimite);
    const fecha_limite = moment(formatoActual).format('YYYY-MM-DD');

    if(this.id_periodo){
  this.serviceDicente.CrearActvidad(fecha_limite, descripcion, this.id_grupo, this.id_periodo)
  .subscribe((res:BodyActividadRespons3)=>{
    this.visible = true;
     this.id_actividad = res[0].id_actividad
  });

      console.log('eeeeeeeeee');
      
}else{
  Swal.fire('Error','Elija un perido' , 'error');
}
  }


  editarActividad(){
    console.log('Editando...');
    const {descripcion} = this.formulario.value;

    this.serviceDicente.editActivity(this.id_actividad, descripcion)
                        .subscribe(e=>{
                          console.log(e);
                          
                        })
    
  }

    

    getArchivo(e){
      const d = e.target.files[0].name;
      if(d!=''){
        const s =this.serviceup.updloadFile(e, this.id_grado, this.id_grupo, this.id_asignatura, this.id_actividad);
      if(this.serviceup.satus()){
        this.archivoCargado.push(d);
      }
        
      
      }
    } 

    periodos(item, event){
  
      this.id_periodo = item.id_periodo;        
    }



    //Evento que se gatilla cuando el input de tipo archivo cambia


}
