import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { UploadServiceService } from 'src/app/services/upload-service.service';
import { ServiceDocenteService } from '../../../services/service-docente.service';
import { BodyGrupo, BodyAsignatura, BodyActividadRespons3 } from '../../../interface/inteface_tracher';

import * as _moment from 'moment';
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



    //obteniendo grupo
    this.serviceDicente.getGrupo(this.id_grado, this.id_grupo).
                    subscribe(
                          (response:BodyGrupo) =>{
                                console.log(response);

                            this.grado = response[0].grado;
                            this.posicion = response[0].posicion;
                          }
    );
    //obteniendo asignatura
    this.serviceDicente.getAsignatura(this.id_grupo)
                        .subscribe((response:BodyAsignatura)=>{
                          console.log(response);
                          console.log(response, '2222222222222');

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

      this.serviceDicente.CrearActvidad(fecha_limite, descripcion, this.id_grupo)
                          .subscribe((res:BodyActividadRespons3)=>{
                             this.id_actividad = res[0].id_actividad

                          });





  }


  aniadir():void{
    this.aniadirTarea = true;
    }
    cancelar():void{
      this.aniadirTarea = false;
    }

    getArchivo(e){
      const d = e.target.files[0].name;
      if(d!=''){
        this.serviceup.updloadFile(e, this.id_grado, this.id_grupo, this.id_asignatura, this.id_actividad);

      
      }
    }



    //Evento que se gatilla cuando el input de tipo archivo cambia


}
