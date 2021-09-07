import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { UploadServiceService } from 'src/app/services/upload-service.service';
import { ServiceDocenteService } from '../../../services/service-docente.service';
import { BodyGrupo, BodyAsignatura, BodyActividadRespons3, BodyPeriodo } from '../../../interface/inteface_tracher';

import * as _moment from 'moment';
import Swal from 'sweetalert2';
import { finalize } from 'rxjs/operators';
const moment = _moment;
@Component({
  selector: 'app-agregar-actividad',
  templateUrl: './agregar-actividad.component.html',
  styleUrls: ['./agregar-actividad.component.css']
})
export class AgregarActividadComponent implements OnInit {

  items=['Home', 'Actividades', 'Cursos'];

  // ____________________
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public peso = '';
  public formato ='';
  public porcentaje = 0;
  public finalizado = false;
  public path = '';

  // ____________________
  
  id_user: string = localStorage.getItem('userId');

  private id_grado: string;
  private id_grupo:string;
  id_actividad:string;
  aniadirTarea:boolean = false;
  private id_asignatura:string;
  file;
  archivoCargado:string[] = [];
  visible:boolean = false;
  periodo: BodyPeriodo[] =[];
  

  id_periodo:string;
  periodoSelect:string;
  grado: string;
  posicion:string;
  asiganatura:string;
  id_actividadEdit:string;

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
    this.id_actividadEdit =  this.router.snapshot.paramMap.get('id_actividad');


    if(this.id_actividadEdit){
      this.id_actividad = this.id_actividadEdit;
      this.visible = true;
      this.serviceDicente.getActividadById(this.id_actividadEdit)
                   .subscribe(
                     res=>{
                       console.log(res);
                       this.formulario.controls['descripcion'].setValue(res[0].descripcion); 
                       this.formulario.controls['fechaLimite'].setValue(res[0].fecha_limite); 
                     }
                   )   
    }


    this.serviceDicente.periodos()
                       .subscribe(
                         res=>{
                           res.forEach(element => {
                              this.periodo.push(element);
                           });
                         }
                       )
                       console.log(this.id_grado, '2222222222' , this.id_grupo);
                       
    //obteniendo grupo
  if(this.id_grado){

      this.serviceDicente.getGrupo(this.id_grupo, this.id_grado).
      subscribe(
        (response:BodyGrupo) =>{
          this.grado = response[0].grado;
          this.posicion = response[0].posicion;
        }
        );
      }
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
    const {descripcion, fechaLimite} = this.formulario.value;

    this.serviceDicente.editActivity(this.id_actividad, descripcion)
                        .subscribe(e=>{
                          console.log(e);
                          
                        })

    this.serviceDicente.editActivityAsignada(this.id_actividad, fechaLimite)
                        .subscribe(e=>{
                          console.log(e);
                          
                        })
  }

    getArchivo(e){
       this.file = e;
      if(this.file.target.files[0].name!=''){

         this.archivoCargado.push(this.file.target.files[0].name); 
         
        }
      } 
      cargar(){
        console.log(this.file);
        
        
          // console.log(this.serviceup.upd, );
          
    }

    periodos(item, event){
  
      this.id_periodo = item.id_periodo;        
    }

    public archivoForm = new FormGroup({
      archivo: new FormControl(null, Validators.required),
    });
  
    
    public cambioArchivo(event) {
      const file =  event.target.files[0];
      this.archivoCargado.push(file.name) ;
      this.nombreArchivo =file.name;
      this.peso =    `${file.size/1000}`;
      this.formato = file.name.split(".");
      this.datosFormulario.delete('archivo');
      this.datosFormulario.append('archivo', event.target.files[0], event.target.files[0].name)
      this.path =`Docente/${this.id_user}/${this.id_grado}/${this.id_grupo}/${this.id_asignatura}/${this.nombreArchivo}`;  
    }
  
    //Sube el archivo a Cloud Storage
    public subirArchivo() {
      let archivo = this.datosFormulario.get('archivo');
      let referencia = this.serviceup.referenciaCloudStorage(this.path);
      let tarea = this.serviceup.tareaCloudStorage(this.path, archivo);
  
      //Cambia el porcentaje
      tarea.percentageChanges().subscribe((porcentaje) => {
        this.porcentaje = Math.round(porcentaje);
        if (this.porcentaje == 100) {
          this.finalizado = true;
        }
      });
  
      tarea.snapshotChanges()   
                  .pipe(
                    finalize(()=>{
                        referencia.getDownloadURL()
                        .subscribe(url=>{
                          console.log(url);
        this.serviceup.updloadFile(
          url, 
          this.nombreArchivo,
          this.formato[1],
          this.peso,
         this.id_actividad).subscribe(res=>{
        console.log(res);
        
      });

                          
                        })
                    })
                  ).subscribe(url=>{})
    }
  


    //Evento que se gatilla cuando el input de tipo archivo cambia


}
